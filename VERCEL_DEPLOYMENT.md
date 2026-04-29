# Vercel Deployment

Use this option when Render asks for billing information.

Vercel can deploy the React frontend and FastAPI API on the free Hobby plan. The backend runs as serverless Python functions, so REST endpoints work, but long-lived WebSockets are not guaranteed. The app still uses Supabase Postgres for persistent online data.

## Environment variable

Add this in Vercel project settings:

```text
DATABASE_URL=postgresql://postgres.qktgmaqnjepthxhnuhyn:YOUR_PASSWORD_ENCODED@aws-1-eu-west-2.pooler.supabase.com:6543/postgres?sslmode=require
```

Your password contains `&&`, so encode it as `%26%26`.

Also add these security variables:

```text
APP_SECRET=a-long-random-secret-at-least-32-characters
DEMO_PASSWORD=your-new-login-password
ALLOWED_ORIGINS=https://sros-restaurant-os.vercel.app
SENSOR_API_KEY=another-long-random-secret-if-you-use-sensor-webhooks
```

## Deploy from GitHub

1. Go to Vercel.
2. Import the GitHub repo:

```text
https://github.com/anonymnd/Smart-OS-restaurant
```

3. Keep the detected framework as **Other** if asked.
4. Add the `DATABASE_URL` environment variable.
5. Deploy.

## Verify

After deploy, open:

```text
https://YOUR-VERCEL-URL/health/db
```

Expected result:

```json
{"ok": true, "dialect": "postgresql", "database_url_configured": true}
```

The same response includes a `security` object. In production, `app_secret_configured` and `custom_demo_password` should be `true`.
