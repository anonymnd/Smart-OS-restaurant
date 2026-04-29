# Deploy Smart Restaurant OS

The simplest no-Docker deployment is one web service that builds React and serves it from FastAPI.

## Render

1. Push this folder to a GitHub repository.
2. In Render, choose **New > Blueprint** and select the repository.
3. Render will read `render.yaml`.
4. Add `DATABASE_URL` from Supabase or Neon in the Render environment variables.
5. After deploy, open the generated Render URL.

Build command:

```bash
pip install -r requirements.txt
```

Start command:

```bash
uvicorn backend:app --host 0.0.0.0 --port $PORT
```

Environment variables:

```text
DATABASE_URL=postgresql://postgres.qktgmaqnjepthxhnuhyn:YOUR_PASSWORD@aws-1-eu-west-2.pooler.supabase.com:6543/postgres?sslmode=require
```

Use the Supabase **Transaction pooler** connection string for hosted apps. Keep `sslmode=require`.

## Railway

Create a new service from the GitHub repo and use:

```bash
pip install -r requirements.txt
```

Start command:

```bash
uvicorn backend:app --host 0.0.0.0 --port $PORT
```

## Local production test

```bash
npm run build
uvicorn backend:app --host 127.0.0.1 --port 8000
```

Then open:

```text
http://127.0.0.1:8000
```

If `DATABASE_URL` is empty, the app uses local SQLite at `restaurant_os.sqlite3`.
