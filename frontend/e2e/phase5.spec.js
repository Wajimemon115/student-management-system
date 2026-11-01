// frontend/e2e/phase5.spec.js
//
// E2E tests for Phase 5 (Students, Courses, Teachers).
// Requires BOTH servers running:  Django on :8000  and  Vite on :5173
//
// Run:  npx playwright test e2e/phase5.spec.js
//
// All data created by these tests is tagged "E2E-<run id>" and removed in afterAll.

import { test, expect, request } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://localhost:5173";
const API = process.env.API_URL || "http://127.0.0.1:8000/api";

test.use({ baseURL: BASE_URL });

/* -------------------------------------------------------------------------- */
/*  Test data helpers                                                          */
/* -------------------------------------------------------------------------- */

const RUN = String(Date.now()).slice(-7);
const TAG = `E2E-${RUN}`;
let seq = 0;
const tok = () => `K${String(++seq).padStart(3, "0")}`; // K001, K002 ...
const pad = (n) => String(n).padStart(2, "0");
const mail = (k, kind) => `${TAG.toLowerCase()}-${kind}${k}@example.com`;
const range = (a, b, total) => `Showing ${a}\u2013${b} of ${total}`;

let api; // Playwright APIRequestContext used to seed / verify / clean up

async function post(path, data) {
  const res = await api.post(`${API}/${path}/`, { data });
  if (!res.ok()) {
    throw new Error(`POST /${path}/ failed (${res.status()}): ${await res.text()}`);
  }
  return res.json();
}

async function get(path) {
  const res = await api.get(`${API}/${path}`);
  return { status: res.status(), body: await res.json().catch(() => null) };
}

const find = (endpoint, term) =>
  get(`${endpoint}/?search=${encodeURIComponent(term)}&page_size=100`);

const remove = (endpoint, id) => api.delete(`${API}/${endpoint}/${id}/`);

function newTeacher(over = {}) {
  const k = tok();
  return post("teachers", {
    name: `${TAG} Teacher ${k}`,
    email: mail(k, "t"),
    phone: "0300-0000000",
    subject: "Testing",
    ...over,
  });
}

function newCourse(over = {}) {
  const k = tok();
  return post("courses", {
    name: `${TAG} Course ${k}`,
    code: `C${RUN}${k}`,
    duration: "3 years",
    teacher: null,
    ...over,
  });
}

function newStudent(over = {}) {
  const k = tok();
  return post("students", {
    name: `${TAG} Student ${k}`,
    roll_number: `R${RUN}${k}`,
    email: mail(k, "s"),
    phone: "0311-0000000",
    course: null,
    ...over,
  });
}

async function seedTeachers(label, count) {
  const term = `${TAG}-${label}`;
  for (let i = 1; i <= count; i++) {
    await post("teachers", {
      name: `${term} ${pad(i)}`,
      email: `${term.toLowerCase()}-${i}@example.com`,
      phone: "",
      subject: "Pagination",
    });
  }
  return term;
}

/* -------------------------------------------------------------------------- */
/*  UI helpers                                                                 */
/* -------------------------------------------------------------------------- */

const modal = (page) => page.locator(".modal-overlay .modal");

const group = (page, label) =>
  modal(page)
    .locator(".form-group")
    .filter({ has: page.locator("label", { hasText: new RegExp(`^${label}$`) }) });

const input = (page, label) => group(page, label).locator("input, select, textarea");
const fieldError = (page, label) => group(page, label).locator(".form-error");

const rowOf = (page, text) => page.locator("tbody tr", { hasText: text });
const toast = (page, kind, text) => page.locator(`.toast-${kind}`, { hasText: text });
const searchFor = (page, plural, term) =>
  page.getByPlaceholder(`Search ${plural}...`).fill(term);

async function openAdd(page, singular) {
  await page.getByRole("button", { name: `+ Add ${singular}` }).click();
  await expect(
    modal(page).getByRole("heading", { name: `Add ${singular}` })
  ).toBeVisible();
}

const save = (page) => modal(page).getByRole("button", { name: "Save" }).click();

async function clickRowDelete(page, text) {
  await rowOf(page, text).getByRole("button", { name: "Delete" }).click();
  await expect(
    modal(page).getByRole("heading", { name: "Confirm delete" })
  ).toBeVisible();
}

const confirmDelete = (page) =>
  modal(page).getByRole("button", { name: "Delete", exact: true }).click();

async function statValue(page, label) {
  const card = page
    .locator(".stat-card")
    .filter({ has: page.locator(".stat-label", { hasText: label }) });
  return Number(await card.locator(".stat-value").innerText());
}

/* -------------------------------------------------------------------------- */
/*  Setup / teardown                                                           */
/* -------------------------------------------------------------------------- */

test.beforeAll(async () => {
  api = await request.newContext();
  const res = await api.get(`${API}/health/`).catch(() => null);
  if (!res || !res.ok()) {
    throw new Error(
      `Backend not reachable at ${API}. Start it with: python manage.py runserver`
    );
  }
});

test.afterAll(async () => {
  // children first, so nothing blocks the parent deletes
  for (const endpoint of ["students", "courses", "teachers"]) {
    for (let pass = 0; pass < 10; pass++) {
      const { body } = await find(endpoint, TAG);
      if (!body?.results?.length) break;
      for (const item of body.results) await remove(endpoint, item.id);
    }
  }
  await api.dispose();
});

/* ========================================================================== */
/*  1-3. TEACHERS: validation, add, duplicate, edit, delete                    */
/* ========================================================================== */

test.describe("Teachers", () => {
  test("1a. empty submit shows required errors and sends nothing", async ({ page }) => {
    let posted = false;
    page.on("request", (req) => {
      if (req.method() === "POST") posted = true;
    });

    await page.goto("/teachers");
    await openAdd(page, "Teacher");
    await save(page);

    await expect(modal(page).getByText("Full Name is required")).toBeVisible();
    await expect(modal(page).getByText("Email is required")).toBeVisible();
    await expect(modal(page)).toBeVisible(); // modal stays open
    expect(posted).toBe(false);
  });

  test("1b. typing in a field clears that field's error", async ({ page }) => {
    await page.goto("/teachers");
    await openAdd(page, "Teacher");
    await save(page);

    await input(page, "Full Name").fill("x");
    await expect(modal(page).getByText("Full Name is required")).toBeHidden();
    await expect(modal(page).getByText("Email is required")).toBeVisible();
  });

  test("1c. adding a real teacher shows a green toast and the new row", async ({ page }) => {
    const k = tok();
    const name = `${TAG} UI Teacher ${k}`;
    const email = mail(k, "ui");

    await page.goto("/teachers");
    await openAdd(page, "Teacher");
    await input(page, "Full Name").fill(name);
    await input(page, "Email").fill(email);
    await input(page, "Phone").fill("0300-1234567");
    await input(page, "Subject").fill("Chemistry");
    await save(page);

    await expect(toast(page, "success", "Teacher added")).toBeVisible();
    await expect(modal(page)).toBeHidden();

    await searchFor(page, "teachers", name);
    const row = rowOf(page, name);
    await expect(row).toBeVisible();
    await expect(row).toContainText(email);
    await expect(row).toContainText("Chemistry");

    expect((await find("teachers", email)).body.count).toBe(1);
  });

  test("2. duplicate email shows the server error under the email field", async ({ page }) => {
    const existing = await newTeacher();

    await page.goto("/teachers");
    await openAdd(page, "Teacher");
    await input(page, "Full Name").fill(`${TAG} Duplicate ${tok()}`);
    await input(page, "Email").fill(existing.email);
    await save(page);

    await expect(fieldError(page, "Email")).toContainText(/already exists/i);
    await expect(toast(page, "error", "Please fix the errors in the form")).toBeVisible();
    await expect(modal(page)).toBeVisible();
  });

  test("3a. editing a teacher pre-fills the form and saves changes", async ({ page }) => {
    const t = await newTeacher();
    const newName = `${t.name} Edited`;

    await page.goto("/teachers");
    await searchFor(page, "teachers", t.name);
    await rowOf(page, t.name).getByRole("button", { name: "Edit" }).click();

    await expect(modal(page).getByRole("heading", { name: "Edit Teacher" })).toBeVisible();
    await expect(input(page, "Full Name")).toHaveValue(t.name);
    await expect(input(page, "Email")).toHaveValue(t.email);

    await input(page, "Full Name").fill(newName);
    await save(page);

    await expect(toast(page, "success", "Teacher updated")).toBeVisible();
    await expect(modal(page)).toBeHidden();
    await expect(rowOf(page, newName)).toBeVisible();
    expect((await get(`teachers/${t.id}/`)).body.name).toBe(newName);
  });

  test("3b. delete asks for confirmation first, cancel keeps it, confirm removes it", async ({ page }) => {
    const t = await newTeacher();

    await page.goto("/teachers");
    await searchFor(page, "teachers", t.name);
    await clickRowDelete(page, t.name);

    await expect(modal(page)).toContainText(t.name);
    expect((await get(`teachers/${t.id}/`)).status).toBe(200); // nothing deleted yet

    // cancel
    await modal(page).getByRole("button", { name: "Cancel" }).click();
    await expect(modal(page)).toBeHidden();
    await expect(rowOf(page, t.name)).toBeVisible();

    // confirm
    await clickRowDelete(page, t.name);
    await confirmDelete(page);

    await expect(toast(page, "success", "Teacher deleted")).toBeVisible();
    await expect(modal(page)).toBeHidden();
    await expect(rowOf(page, t.name)).toHaveCount(0);
    expect((await get(`teachers/${t.id}/`)).status).toBe(404);
  });

  test("3c. a failed delete shows a red error toast", async ({ page }) => {
    const t = await newTeacher();

    await page.goto("/teachers");
    await searchFor(page, "teachers", t.name);
    await clickRowDelete(page, t.name);

    // delete it behind the UI's back so the UI's own DELETE returns 404
    await remove("teachers", t.id);
    await confirmDelete(page);

    await expect(toast(page, "error", "Could not delete teacher")).toBeVisible();
    await expect(modal(page)).toBeVisible();
  });
});

/* ========================================================================== */
/*  4. COURSES                                                                 */
/* ========================================================================== */

test.describe("Courses", () => {
  test("4a. add a course and pick a teacher from the dropdown", async ({ page }) => {
    const teacher = await newTeacher();
    const k = tok();
    const name = `${TAG} UI Course ${k}`;
    const code = `UC${RUN}${k}`;

    await page.goto("/courses");
    await openAdd(page, "Course");

    await expect(
      input(page, "Teacher").locator("option", { hasText: teacher.name })
    ).toHaveCount(1);

    await input(page, "Course Name").fill(name);
    await input(page, "Course Code").fill(code);
    await input(page, "Duration").fill("6 months");
    await input(page, "Teacher").selectOption({ label: teacher.name });
    await save(page);

    await expect(toast(page, "success", "Course added")).toBeVisible();
    await expect(modal(page)).toBeHidden();

    await searchFor(page, "courses", name);
    const row = rowOf(page, name);
    await expect(row).toContainText(code);
    await expect(row).toContainText("6 months");
    await expect(row).toContainText(teacher.name);

    expect((await find("courses", code)).body.results[0].teacher).toBe(teacher.id);
  });

  test("4b. empty submit shows required errors", async ({ page }) => {
    await page.goto("/courses");
    await openAdd(page, "Course");
    await save(page);

    await expect(modal(page).getByText("Course Name is required")).toBeVisible();
    await expect(modal(page).getByText("Course Code is required")).toBeVisible();
  });

  test("4c. duplicate course code shows the server error under Course Code", async ({ page }) => {
    const existing = await newCourse();

    await page.goto("/courses");
    await openAdd(page, "Course");
    await input(page, "Course Name").fill(`${TAG} Another ${tok()}`);
    await input(page, "Course Code").fill(existing.code);
    await save(page);

    await expect(fieldError(page, "Course Code")).toContainText(/already exists/i);
    await expect(toast(page, "error", "Please fix the errors in the form")).toBeVisible();
  });
});

/* ========================================================================== */
/*  5. STUDENTS                                                                */
/* ========================================================================== */

test.describe("Students", () => {
  test("5a. add a student with course, date of birth and address", async ({ page }) => {
    const course = await newCourse();
    const k = tok();
    const name = `${TAG} UI Student ${k}`;
    const roll = `UR${RUN}${k}`;
    const email = mail(k, "ui");

    await page.goto("/students");
    await openAdd(page, "Student");
    await input(page, "Full Name").fill(name);
    await input(page, "Roll Number").fill(roll);
    await input(page, "Email").fill(email);
    await input(page, "Phone").fill("0311-7654321");
    await input(page, "Date of Birth").fill("2004-05-20");
    await input(page, "Course").selectOption({ label: `${course.code} - ${course.name}` });
    await input(page, "Address").fill("House 1, Street 2, Islamabad");
    await save(page);

    await expect(toast(page, "success", "Student added")).toBeVisible();
    await expect(modal(page)).toBeHidden();

    await searchFor(page, "students", name);
    const row = rowOf(page, name);
    await expect(row).toContainText(roll);
    await expect(row).toContainText(course.name); // Course column shows the name

    const saved = (await find("students", roll)).body.results[0];
    expect(saved.course).toBe(course.id);
    expect(saved.date_of_birth).toBe("2004-05-20");
    expect(saved.address).toBe("House 1, Street 2, Islamabad");
  });

  test("5b. empty submit shows required errors", async ({ page }) => {
    await page.goto("/students");
    await openAdd(page, "Student");
    await save(page);

    await expect(modal(page).getByText("Full Name is required")).toBeVisible();
    await expect(modal(page).getByText("Roll Number is required")).toBeVisible();
    await expect(modal(page).getByText("Email is required")).toBeVisible();
  });

  test("5c. duplicate roll number and email show server errors", async ({ page }) => {
    const existing = await newStudent();

    await page.goto("/students");
    await openAdd(page, "Student");
    await input(page, "Full Name").fill(`${TAG} Dup ${tok()}`);
    await input(page, "Roll Number").fill(existing.roll_number);
    await input(page, "Email").fill(existing.email);
    await save(page);

    await expect(fieldError(page, "Roll Number")).toContainText(/already exists/i);
    await expect(fieldError(page, "Email")).toContainText(/already exists/i);
    await expect(toast(page, "error", "Please fix the errors in the form")).toBeVisible();
  });

  test("5d. editing a student pre-fills course, date of birth and address", async ({ page }) => {
    const course = await newCourse();
    const s = await newStudent({
      course: course.id,
      date_of_birth: "2004-05-20",
      address: "House 1, Street 2",
    });

    await page.goto("/students");
    await searchFor(page, "students", s.name);
    await rowOf(page, s.name).getByRole("button", { name: "Edit" }).click();

    await expect(input(page, "Course")).toHaveValue(String(course.id));
    await expect(input(page, "Date of Birth")).toHaveValue("2004-05-20");
    await expect(input(page, "Address")).toHaveValue("House 1, Street 2");

    await input(page, "Phone").fill("0399-9999999");
    await save(page);

    await expect(toast(page, "success", "Student updated")).toBeVisible();
    await expect(rowOf(page, s.name)).toContainText("0399-9999999");
  });
});

/* ========================================================================== */
/*  6. SEARCH                                                                  */
/* ========================================================================== */

test.describe("Search", () => {
  test("6a. filters by part of a name (case-insensitive) and by roll number", async ({ page }) => {
    const s1 = await newStudent({ name: `${TAG} Zeeshan` });
    const s2 = await newStudent({ name: `${TAG} Mariam` });
    const s3 = await newStudent({ name: `${TAG} Hamza` });

    await page.goto("/students");

    // part of a name, different case
    await searchFor(page, "students", `${TAG} ZEES`);
    await expect(rowOf(page, s1.name)).toBeVisible();
    await expect(rowOf(page, s2.name)).toHaveCount(0);
    await expect(rowOf(page, s3.name)).toHaveCount(0);

    // part of a roll number
    await searchFor(page, "students", s2.roll_number.slice(1));
    await expect(rowOf(page, s2.name)).toBeVisible();
    await expect(rowOf(page, s1.name)).toHaveCount(0);
    await expect(rowOf(page, s3.name)).toHaveCount(0);
  });

  test("6b. no match shows an empty state, clearing restores the list", async ({ page }) => {
    await newStudent(); // make sure the list is not empty
    await page.goto("/students");

    await searchFor(page, "students", `no-such-student-${RUN}`);
    await expect(page.getByText("No records found")).toBeVisible();

    await searchFor(page, "students", "");
    await expect(page.getByText("No records found")).toHaveCount(0);
    await expect(page.locator("tbody tr").first()).toBeVisible();
  });

  test("6c. search waits for a pause in typing (one request, not one per key)", async ({ page }) => {
    const s = await newStudent();
    await page.goto("/students");

    const terms = [];
    page.on("request", (req) => {
      const m = req.url().match(/\/api\/students\/\?.*search=([^&]+)/);
      if (m) terms.push(decodeURIComponent(m[1]));
    });

    await page
      .getByPlaceholder("Search students...")
      .pressSequentially(s.roll_number, { delay: 40 });

    await expect(rowOf(page, s.name)).toBeVisible();
    await page.waitForTimeout(800); // give any stray extra requests time to show up
    expect(terms).toEqual([s.roll_number]);
  });
});

/* ========================================================================== */
/*  7-8. PAGINATION (data is seeded via the API: no need to edit PAGE_SIZE)    */
/*  Requires  const PAGE_SIZE = 10;  in CrudPage.jsx                           */
/* ========================================================================== */

test.describe("Pagination", () => {
  test("7. Previous / Next and the 'Showing x-y of z' text work", async ({ page }) => {
    const term = await seedTeachers("PGA", 11);

    await page.goto("/teachers");
    await searchFor(page, "teachers", term);

    const info = page.locator(".pagination-info");
    const pageLabel = page.locator(".pagination-controls span");
    const prev = page.getByRole("button", { name: "Previous" });
    const next = page.getByRole("button", { name: "Next" });

    // page 1
    await expect(info).toHaveText(range(1, 10, 11));
    await expect(pageLabel).toHaveText("Page 1 of 2");
    await expect(page.locator("tbody tr")).toHaveCount(10);
    await expect(prev).toBeDisabled();
    await expect(next).toBeEnabled();

    // page 2
    await next.click();
    await expect(info).toHaveText(range(11, 11, 11));
    await expect(pageLabel).toHaveText("Page 2 of 2");
    await expect(page.locator("tbody tr")).toHaveCount(1);
    await expect(next).toBeDisabled();
    await expect(prev).toBeEnabled();

    // back to page 1
    await prev.click();
    await expect(info).toHaveText(range(1, 10, 11));
  });

  test("8. deleting the last item on the last page goes back one page (no error)", async ({ page }) => {
    const term = await seedTeachers("PGB", 11);

    await page.goto("/teachers");
    await searchFor(page, "teachers", term);
    await page.getByRole("button", { name: "Next" }).click();

    await expect(page.locator(".pagination-info")).toHaveText(range(11, 11, 11));
    await expect(page.locator("tbody tr")).toHaveCount(1);

    // list is newest-first, so the only item on page 2 is the first one seeded
    await clickRowDelete(page, `${term} 01`);
    await confirmDelete(page);

    await expect(toast(page, "success", "Teacher deleted")).toBeVisible();
    await expect(page.locator(".error-box")).toHaveCount(0);
    await expect(page.locator(".pagination-controls span")).toHaveText("Page 1 of 1");
    await expect(page.locator(".pagination-info")).toHaveText(range(1, 10, 10));
    await expect(page.locator("tbody tr")).toHaveCount(10);
  });
});

/* ========================================================================== */
/*  Heads-up on deletes (set in the Phase 3 models)                            */
/* ========================================================================== */

test.describe("Delete behaviour", () => {
  test("deleting a teacher keeps their course, teacher becomes empty", async ({ page }) => {
    const t = await newTeacher();
    const c = await newCourse({ teacher: t.id });

    await page.goto("/teachers");
    await searchFor(page, "teachers", t.name);
    await clickRowDelete(page, t.name);
    await confirmDelete(page);
    await expect(toast(page, "success", "Teacher deleted")).toBeVisible();

    await page.goto("/courses");
    await searchFor(page, "courses", c.name);
    await expect(rowOf(page, c.name)).toContainText("\u2014");

    const course = (await get(`courses/${c.id}/`)).body;
    expect(course.teacher).toBeNull();
  });

  test("deleting a course keeps its students, course becomes empty", async ({ page }) => {
    const c = await newCourse();
    const s = await newStudent({ course: c.id });

    await page.goto("/courses");
    await searchFor(page, "courses", c.name);
    await clickRowDelete(page, c.name);
    await confirmDelete(page);
    await expect(toast(page, "success", "Course deleted")).toBeVisible();

    await page.goto("/students");
    await searchFor(page, "students", s.name);
    await expect(rowOf(page, s.name)).toContainText("\u2014");
    expect((await get(`students/${s.id}/`)).body.course).toBeNull();
  });

  test("deleting a student also deletes their results and attendance", async () => {
    const c = await newCourse();
    const s = await newStudent({ course: c.id });
    await post("results", { student: s.id, course: c.id, exam: "Midterm", marks: 95 });
    await post("attendance", { student: s.id, date: "2026-01-05", status: "present" });

    expect((await get(`results/?student=${s.id}`)).body.count).toBe(1);
    expect((await get(`attendance/?student=${s.id}`)).body.count).toBe(1);

    const res = await remove("students", s.id);
    expect(res.status()).toBe(204);

    expect((await get(`results/?student=${s.id}`)).body.count).toBe(0);
    expect((await get(`attendance/?student=${s.id}`)).body.count).toBe(0);
  });

  test("deleting a course also deletes its results (students stay)", async () => {
    const c = await newCourse();
    const s = await newStudent({ course: c.id });
    await post("results", { student: s.id, course: c.id, exam: "Final", marks: 80 });

    expect((await get(`results/?course=${c.id}`)).body.count).toBe(1);

    const res = await remove("courses", c.id);
    expect(res.status()).toBe(204);

    expect((await get(`results/?course=${c.id}`)).body.count).toBe(0);
    expect((await get(`students/${s.id}/`)).status).toBe(200);
  });
});

/* ========================================================================== */
/*  Dashboard counts                                                           */
/* ========================================================================== */

test.describe("Dashboard", () => {
  const CARDS = [
    ["Students", "students"],
    ["Courses", "courses"],
    ["Teachers", "teachers"],
    ["Results", "results"],
    ["Attendance", "attendance"],
  ];

  test("counts match the API and update after records are added / removed", async ({ page }) => {
    const stats = async () => (await get("dashboard/stats/")).body;
    const expectCards = async (expected) => {
      for (const [label, key] of CARDS) {
        await expect.poll(() => statValue(page, label)).toBe(expected[key]);
      }
    };

    await page.goto("/");
    const before = await stats();
    await expectCards(before);

    const t = await newTeacher();
    const c = await newCourse({ teacher: t.id });
    const s = await newStudent({ course: c.id });

    await page.reload();
    await expectCards({
      ...before,
      teachers: before.teachers + 1,
      courses: before.courses + 1,
      students: before.students + 1,
    });

    await remove("students", s.id);
    await remove("courses", c.id);
    await remove("teachers", t.id);

    await page.reload();
    await expectCards(before);
  });
});

/* ========================================================================== */
/*  Troubleshooting checks                                                     */
/* ========================================================================== */

test.describe("Backend / API sanity", () => {
  test("list endpoints are paginated ({count, results}) and accept page_size", async () => {
    for (const endpoint of ["students", "courses", "teachers", "results", "attendance"]) {
      const { status, body } = await get(`${endpoint}/?page_size=100`);
      expect(status, endpoint).toBe(200);
      expect(typeof body.count, endpoint).toBe("number");
      expect(Array.isArray(body.results), endpoint).toBe(true);
      expect(body.results.length, endpoint).toBeLessThanOrEqual(100);
    }
  });

  test("shows an error state with Retry when the list cannot load", async ({ page }) => {
    let failRequests = true;
    await page.route(/\/api\/teachers\/\?/, (route) =>
      failRequests ? route.abort() : route.continue()
    );

    await page.goto("/teachers");
    await expect(page.locator(".error-box")).toContainText("Failed to load data");

    failRequests = false;
    await page.getByRole("button", { name: "Retry" }).click();

    await expect(page.locator(".error-box")).toBeHidden();
    await expect(page.locator("tbody tr").first()).toBeVisible();
  });
});
