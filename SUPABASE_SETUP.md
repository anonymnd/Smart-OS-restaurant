# Supabase Database Setup

This app is now ready to use Supabase Postgres through the `DATABASE_URL` environment variable.

## 1. Create the Supabase database

1. Go to Supabase.
2. Create a new free project.
3. Open **Project Settings > Database**.
4. Copy the **Transaction pooler** connection string.
5. Replace `[YOUR-PASSWORD]` with your database password.

The value should look like this:

For this project, your pooler connection string is:

```text
postgresql://postgres.qktgmaqnjepthxhnuhyn:YOUR_PASSWORD@aws-1-eu-west-2.pooler.supabase.com:6543/postgres?sslmode=require
```

Use the pooler URL for Render/Railway because hosted web apps create multiple short-lived connections.

## 2. Configure Render

In Render, add this environment variable:

```text
DATABASE_URL=postgresql://postgres.qktgmaqnjepthxhnuhyn:YOUR_PASSWORD@aws-1-eu-west-2.pooler.supabase.com:6543/postgres?sslmode=require
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

You can verify the active database from the API:

```text
/health/db
```

For production security, set these app environment variables in Vercel:

```text
APP_SECRET=a-long-random-secret-at-least-32-characters
DEMO_PASSWORD=your-new-login-password
ALLOWED_ORIGINS=https://sros-restaurant-os.vercel.app
SENSOR_API_KEY=another-long-random-secret-if-you-use-sensor-webhooks
```

## 4. Realtime behavior

The app's realtime UI uses FastAPI WebSocket:

```text
/ws
```

Supabase is used as the persistent cloud database. If you later want database-level Supabase Realtime subscriptions, enable replication for the relevant tables in Supabase and add a frontend Supabase client.
