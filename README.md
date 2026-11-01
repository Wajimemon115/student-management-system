# StudentHub — Student Management System

Full-stack web app for managing students, teachers, courses, exam results, and attendance. Built as **StudentHub**: a React SPA talking to a Django REST API with JWT auth and role-based access.

---

## Features

- **Dashboard** — counts for students, courses, teachers, results, and attendance
- **Students** — CRUD with roll number, email, phone, DOB, address, and course assignment
- **Teachers** — CRUD with contact info and subject
- **Courses** — CRUD with code, duration, and assigned teacher
- **Results** — exam marks with automatic letter grades (A+ through F)
- **Attendance** — mark present/absent per student per day; view history
- **Auth** — JWT login with access + refresh tokens
- **Roles**
  - **admin** (Django superuser) and **teacher** — can create, edit, delete
  - **student** — read-only
- Search, pagination, toasts, and protected routes on the frontend

---

## Tech stack

| Layer    | Technologies |
|----------|--------------|
| Frontend | React 19, Vite 8, React Router, Axios |
| Backend  | Django 6, Django REST Framework, SimpleJWT, django-cors-headers |
| Database | SQLite (default, file: `backend/db.sqlite3`) |
| Tests    | Playwright e2e (`frontend/e2e`) |

---

## Project structure

```
student-management-system/
├── backend/                 # Django project
│   ├── config/              # settings, URLs, auth, permissions, pagination
│   ├── students/
│   ├── teachers/
│   ├── courses/
│   ├── results/
│   ├── attendance/
│   ├── manage.py
│   └── requirements.txt
└── frontend/                # React (Vite) app
    ├── src/
    │   ├── api/             # Axios client + JWT refresh
    │   ├── components/
    │   ├── context/         # Auth + toast
    │   ├── pages/           # Dashboard, Students, Courses, …
    │   └── hooks/
    ├── e2e/                 # Playwright tests
    └── package.json
```

---

## Prerequisites

- **Python** 3.12+ recommended (Django 6)
- **Node.js** 18+ and npm
- Git

---

## Setup

### 1. Clone the repo

```bash
git clone <your-repo-url> student-management-system
cd student-management-system
```

### 2. Backend

```bash
cd backend

# Virtual environment
python3 -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate

# Dependencies
pip install -r requirements.txt

# Database
python manage.py migrate

# Admin user (you choose username/password — this is the admin role)
python manage.py createsuperuser

# Optional sample data (teachers, students, courses, results, attendance)
python manage.py seed

# Optional demo non-admin users (teacher + student roles)
python manage.py demo_users

# Run API (default http://127.0.0.1:8000)
python manage.py runserver
```

Health check: [http://127.0.0.1:8000/api/health/](http://127.0.0.1:8000/api/health/)

Django admin: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

### 3. Frontend

Open a second terminal:

```bash
cd frontend

npm install

# Point the SPA at the local API (required)
echo 'VITE_API_URL=http://127.0.0.1:8000/api' > .env

npm run dev
```

App: [http://localhost:5173](http://localhost:5173)

CORS is already set for `http://localhost:5173` and `http://127.0.0.1:5173`.

---

## Demo accounts

After `createsuperuser` and `demo_users`:

| Username   | Password     | Role    | Can write? |
|------------|--------------|---------|------------|
| *(yours)*  | *(yours)*    | admin   | Yes        |
| `teacher1` | `Teacher@123`| teacher | Yes        |
| `student1` | `Student@123`| student | No (read only) |

Change these passwords before any real deployment.

---

## API overview

Base path: `/api/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health/` | Liveness |
| POST | `/api/auth/login/` | Login → `{ access, refresh, user }` |
| POST | `/api/auth/refresh/` | Refresh access token |
| GET | `/api/auth/me/` | Current user + role |
| GET | `/api/dashboard/stats/` | Entity counts |
| * | `/api/students/` | Student ViewSet (list/create/retrieve/update/delete) |
| * | `/api/courses/` | Course ViewSet |
| * | `/api/teachers/` | Teacher ViewSet |
| * | `/api/results/` | Result ViewSet |
| * | `/api/attendance/` | Attendance ViewSet |

Authenticated requests send:

```http
Authorization: Bearer <access_token>
```

List endpoints support search/pagination (default page size **10**), e.g.:

```text
GET /api/students/?search=ali&page=1&page_size=10
```

---

## Environment variables

### Frontend (`frontend/.env`)

| Variable | Example | Purpose |
|----------|---------|---------|
| `VITE_API_URL` | `http://127.0.0.1:8000/api` | Backend API base URL |

Without this, the UI cannot reach the API.

### Backend

Dev settings live in `backend/config/settings.py` (SQLite, `DEBUG=True`, hardcoded `SECRET_KEY`). For production, move secrets to env vars, set `DEBUG=False`, configure `ALLOWED_HOSTS`, and use a proper database.

---

## Useful commands

```bash
# Backend
cd backend && source venv/bin/activate
python manage.py migrate
python manage.py seed
python manage.py demo_users
python manage.py runserver

# Frontend
cd frontend
npm run dev          # development server
npm run build        # production build
npm run preview      # preview production build
npm run lint         # oxlint

# E2E (both servers must be running)
cd frontend
npx playwright test e2e/phase5.spec.js
```

---

## Roles (how they work)

Roles are derived from Django auth:

- Superuser → **admin**
- User in group `Teacher` → **teacher**
- Everyone else → **student**

Safe methods (GET/HEAD/OPTIONS) are allowed for any logged-in user. Create/update/delete require **admin** or **teacher**. The frontend hides write actions when `canWrite` is false.

---

## Grade scale (results)

| Marks | Grade |
|------:|:------|
| 90–100 | A+ |
| 80–89 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| 0–49 | F |

Grades are computed on save; they are not editable by hand.

---

## Notes

- Default DB is SQLite at `backend/db.sqlite3` (gitignored).
- Access tokens last **30 minutes**; refresh tokens **7 days**. The frontend refreshes automatically on 401.
- Keep both servers running while developing: Django on **:8000**, Vite on **:5173**.
