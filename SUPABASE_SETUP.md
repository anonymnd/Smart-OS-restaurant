# Supabase Database Setup

This app is now ready to use Supabase Postgres through the `DATABASE_URL` environment variable.

## 1. Create the Supabase database

1. Go to Supabase.
2. Create a new free project.
3. Open **Project Settings > Database**.
4. Copy the **Transaction pooler** connection string.
5. Replace `[YOUR-PASSWORD]` with your database password.

The value should look like this:

```text
postgresql://postgres.PROJECT_REF:PASSWORD@aws-0-region.pooler.supabase.com:6543/postgres?sslmode=require
```

Use the pooler URL for Render/Railway because hosted web apps create multiple short-lived connections.

## 2. Configure Render

In Render, add this environment variable:

```text
DATABASE_URL=postgresql://postgres.PROJECT_REF:PASSWORD@aws-0-region.pooler.supabase.com:6543/postgres?sslmode=require
```

Do not commit the real database password to GitHub.

## 3. What the backend creates automatically

On startup, the backend creates these tables if they do not exist:

- `snapshots`
- `audit_log`
- `connectors`
- `task_workflow`
- `settings`

The app still uses local SQLite automatically when `DATABASE_URL` is empty.

## 4. Realtime behavior

The app's realtime UI uses FastAPI WebSocket:

```text
/ws
```

Supabase is used as the persistent cloud database. If you later want database-level Supabase Realtime subscriptions, enable replication for the relevant tables in Supabase and add a frontend Supabase client.
