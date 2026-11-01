# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: phase5.spec.js >> Auth >> admin can sign in and land on the dashboard
- Location: e2e/phase5.spec.js:264:3

# Error details

```
Error: apiRequestContext.get: Request context disposed.
Call log:
  - → GET http://127.0.0.1:8000/api/attendance/?search=E2E-2479011&page_size=100
    - user-agent: Playwright/1.64.1 (x64; ubuntu 26.04) node/22.22
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1   | // frontend/e2e/phase5.spec.js
  2   | //
  3   | // Detailed E2E coverage for StudentHub UI + API.
  4   | // Requires BOTH servers: Django on :8000 and Vite on :5173
  5   | //
  6   | // Demo accounts (from `python manage.py demo_users` + createsuperuser):
  7   | //   admin / admin          → write access
  8   | //   teacher1 / Teacher@123 → write access
  9   | //   student1 / Student@123 → read-only
  10  | //
  11  | // Run:  npx playwright test e2e/phase5.spec.js
  12  | //
  13  | // Data created by these tests is tagged "E2E-<run id>" and removed in afterAll.
  14  | 
  15  | import { test, expect, request } from "@playwright/test";
  16  | 
  17  | const BASE_URL = process.env.BASE_URL || "http://localhost:5173";
  18  | const API = process.env.API_URL || "http://127.0.0.1:8000/api";
  19  | 
  20  | const ADMIN = {
  21  |   username: process.env.E2E_ADMIN_USER || "admin",
  22  |   password: process.env.E2E_ADMIN_PASS || "admin",
  23  | };
  24  | const TEACHER = { username: "teacher1", password: "Teacher@123" };
  25  | const STUDENT = { username: "student1", password: "Student@123" };
  26  | 
  27  | test.use({ baseURL: BASE_URL });
  28  | 
  29  | /* -------------------------------------------------------------------------- */
  30  | /*  Test data helpers                                                          */
  31  | /* -------------------------------------------------------------------------- */
  32  | 
  33  | const RUN = String(Date.now()).slice(-7);
  34  | const TAG = `E2E-${RUN}`;
  35  | let seq = 0;
  36  | const tok = () => `K${String(++seq).padStart(3, "0")}`;
  37  | const pad = (n) => String(n).padStart(2, "0");
  38  | const mail = (k, kind) => `${TAG.toLowerCase()}-${kind}${k}@example.com`;
  39  | const range = (a, b, total) => `Showing ${a}\u2013${b} of ${total}`;
  40  | const todayLocal = () => new Date().toLocaleDateString("en-CA");
  41  | 
  42  | let api;
  43  | let authTokens = { access: "", refresh: "", user: null };
  44  | 
  45  | async function loginApi(username, password) {
  46  |   const res = await api.post(`${API}/auth/login/`, {
  47  |     data: { username, password },
  48  |   });
  49  |   if (!res.ok()) {
  50  |     throw new Error(
  51  |       `Login failed for ${username} (${res.status()}): ${await res.text()}`
  52  |     );
  53  |   }
  54  |   return res.json();
  55  | }
  56  | 
  57  | async function authedContext(tokens) {
  58  |   return request.newContext({
  59  |     extraHTTPHeaders: { Authorization: `Bearer ${tokens.access}` },
  60  |   });
  61  | }
  62  | 
  63  | async function post(path, data) {
  64  |   const res = await api.post(`${API}/${path}/`, { data });
  65  |   if (!res.ok()) {
  66  |     throw new Error(`POST /${path}/ failed (${res.status()}): ${await res.text()}`);
  67  |   }
  68  |   return res.json();
  69  | }
  70  | 
  71  | async function get(path) {
> 72  |   const res = await api.get(`${API}/${path}`);
      |                         ^ Error: apiRequestContext.get: Request context disposed.
  73  |   return { status: res.status(), body: await res.json().catch(() => null) };
  74  | }
  75  | 
  76  | const find = (endpoint, term) =>
  77  |   get(`${endpoint}/?search=${encodeURIComponent(term)}&page_size=100`);
  78  | 
  79  | const remove = (endpoint, id) => api.delete(`${API}/${endpoint}/${id}/`);
  80  | 
  81  | function newTeacher(over = {}) {
  82  |   const k = tok();
  83  |   return post("teachers", {
  84  |     name: `${TAG} Teacher ${k}`,
  85  |     email: mail(k, "t"),
  86  |     phone: "0300-0000000",
  87  |     subject: "Testing",
  88  |     ...over,
  89  |   });
  90  | }
  91  | 
  92  | function newCourse(over = {}) {
  93  |   const k = tok();
  94  |   return post("courses", {
  95  |     name: `${TAG} Course ${k}`,
  96  |     code: `C${RUN}${k}`,
  97  |     duration: "3 years",
  98  |     teacher: null,
  99  |     ...over,
  100 |   });
  101 | }
  102 | 
  103 | function newStudent(over = {}) {
  104 |   const k = tok();
  105 |   return post("students", {
  106 |     name: `${TAG} Student ${k}`,
  107 |     roll_number: `R${RUN}${k}`,
  108 |     email: mail(k, "s"),
  109 |     phone: "0311-0000000",
  110 |     course: null,
  111 |     ...over,
  112 |   });
  113 | }
  114 | 
  115 | function newResult(studentId, courseId, over = {}) {
  116 |   return post("results", {
  117 |     student: studentId,
  118 |     course: courseId,
  119 |     exam: `Exam ${tok()}`,
  120 |     marks: 88,
  121 |     ...over,
  122 |   });
  123 | }
  124 | 
  125 | async function seedTeachers(label, count) {
  126 |   const term = `${TAG}-${label}`;
  127 |   for (let i = 1; i <= count; i++) {
  128 |     await post("teachers", {
  129 |       name: `${term} ${pad(i)}`,
  130 |       email: `${term.toLowerCase()}-${i}@example.com`,
  131 |       phone: "",
  132 |       subject: "Pagination",
  133 |     });
  134 |   }
  135 |   return term;
  136 | }
  137 | 
  138 | /* -------------------------------------------------------------------------- */
  139 | /*  UI helpers                                                                 */
  140 | /* -------------------------------------------------------------------------- */
  141 | 
  142 | const modal = (page) => page.locator(".modal-overlay .modal");
  143 | 
  144 | const group = (page, label) =>
  145 |   modal(page)
  146 |     .locator(".form-group")
  147 |     .filter({ has: page.locator("label", { hasText: new RegExp(`^${label}$`) }) });
  148 | 
  149 | const input = (page, label) => group(page, label).locator("input, select, textarea");
  150 | const fieldError = (page, label) => group(page, label).locator(".form-error");
  151 | 
  152 | const rowOf = (page, text) => page.locator("tbody tr", { hasText: text });
  153 | const toast = (page, kind, text) => page.locator(`.toast-${kind}`, { hasText: text });
  154 | const searchFor = (page, plural, term) =>
  155 |   page.getByPlaceholder(`Search ${plural}...`).fill(term);
  156 | 
  157 | async function injectAuth(page, tokens = authTokens) {
  158 |   await page.addInitScript(
  159 |     ({ access, refresh }) => {
  160 |       localStorage.setItem("studenthub_access", access);
  161 |       localStorage.setItem("studenthub_refresh", refresh);
  162 |     },
  163 |     { access: tokens.access, refresh: tokens.refresh }
  164 |   );
  165 | }
  166 | 
  167 | async function gotoAuthed(page, path, tokens = authTokens) {
  168 |   await injectAuth(page, tokens);
  169 |   await page.goto(path);
  170 |   await expect(page.locator(".splash")).toHaveCount(0, { timeout: 15_000 });
  171 |   await expect(page).not.toHaveURL(/\/login/);
  172 | }
```