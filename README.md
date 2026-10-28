# Smart Restaurant OS

A restaurant operations prototype with a React workspace, FastAPI API,
PostgreSQL persistence, task prioritization, kitchen tickets, and camera tools.

## Development

Use Node.js 24 and Python 3.12. Install dependencies:

```sh
npm ci
python -m pip install -r requirements.txt
```

Copy `.env.example` to `.env`, fill in your own values, and start the API:

```sh
uvicorn backend:app --reload --env-file .env
```

Start the frontend in another terminal:

```sh
npm run dev
```

Open `http://127.0.0.1:5173`. Sign in with your email, the configured
`DEMO_PASSWORD`, and a workspace role. With no database URL, local development
uses SQLite. Local API documentation is available at `/docs`.

## Structure

- `src/pages/`: workspace screens
- `src/components/`: shared controls, navigation, and sign-in
- `src/hooks/useRestaurant.js`: server state, mutations, and refresh
- `src/lib/`: API transport, sessions, navigation, and display helpers
- `backend.py`: HTTP routes and request boundary
- `auth.py`, `config.py`: authentication and environment configuration
- `runtime_state.py`: restaurant state restoration and persistence
- `ops_store.py`: database transactions and queries
- `models.py`, `simulation.py`, `decision_engine.py`: restaurant domain logic
- `pos_kitchen.py`: kitchen tickets
- `ai_pipeline.py`, `cv_adapter.py`, `multi_camera_brain.py`: sensor and camera models

## Vercel

Import the repository as a Vite project. `vercel.json` builds the frontend
from source and deploys `api/index.py` as a Python function. `dist/` is generated
at build time and is not committed.

Configure these variables in the deployment environment:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL transaction-pooler URI, with an encoded password and `sslmode=require` |
| `APP_SECRET` | Random session-signing secret of at least 32 characters |
| `DEMO_PASSWORD` | Private workspace password; production rejects the development default |
| `ALLOWED_ORIGINS` | Comma-separated frontend origins when using a separate API host |
| `SENSOR_API_KEY` | Private key for external sensor webhooks |

The frontend uses the same origin in production. Set `VITE_API_URL` only when
hosting the API separately. Browser-exposed `VITE_*` variables must never contain
secrets. For a non-Vercel production host, also set `APP_ENV=production`.

`/health/db` returns readiness without connection details. Data endpoints require
a signed session. Production disables interactive API documentation. The UI
refreshes one `/dashboard` snapshot every five seconds while visible; it does not
require a persistent connection. Each request restores the latest database state
and commits under a transaction lock so separate workers share one restaurant.
PostgreSQL is required on Vercel; ephemeral SQLite is never used as a fallback.

## Verification

```sh
npm run lint
npm test
npm run build
python -m pip install -r requirements-test.txt
python -m unittest discover -s tests -v
```

Backend tests use an isolated temporary SQLite database. Set `TEST_DATABASE_URL`
to a disposable PostgreSQL database to run the same suite against PostgreSQL.
CI runs both. Never point the test suite at production.

## Prototype boundaries

Sign-in uses a shared workspace password and selectable demonstration roles.
It is not an individual staff-account system. Device-camera object detection
runs in the browser; URL-based camera metadata and risk scoring are simulations.
The interface labels those modes. A real venue needs individual identities and
actual sensor integrations before operational use.

The optional legacy Streamlit dashboard has separate dependencies in
`requirements-dashboard.txt` and is not included in the web deployment.
