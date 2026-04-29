# Smart Restaurant Operating System MVP

This MVP is a real-time restaurant operations decision engine, not a passive monitor.
It simulates IoT inputs, maintains a digital twin, computes prioritized work, assigns tasks
to the nearest available staff member, and explains every decision.

The main product UI is now a React app with authentication, a command center,
digital twin, task queue, staff tablet mode, analytics, event simulator, and settings.

## What is included

- `models.py` - restaurant digital twin, table state machine, clients, staff, tasks, zones
- `decision_engine.py` - priority scoring, task generation, staff assignment, risk detection, metrics
- `simulation.py` - entrance camera, table-zone camera, customer progression, staff events
- `backend.py` - FastAPI event ingestion and decision API
- `src/` - React high-fidelity operating app
- `dashboard.py` - legacy Streamlit prototype dashboard

## Run

Install backend dependencies:

```bash
pip install -r requirements.txt
```

Install frontend dependencies:

```bash
npm install
```

Start the backend:

```bash
uvicorn backend:app --reload
```

Start the React app in a second terminal:

```bash
npm run dev -- --port 5173
```

Open:

```text
http://127.0.0.1:5173
```

Optional legacy Streamlit dashboard:

```bash
streamlit run dashboard.py
```

## API examples

Create an entrance-camera event:

```bash
curl -X POST http://127.0.0.1:8000/events ^
  -H "Content-Type: application/json" ^
  -d "{\"event_type\":\"entrance_camera\",\"payload\":{\"group_size\":4}}"
```

Advance simulation time:

```bash
curl -X POST "http://127.0.0.1:8000/tick?minutes=5"
```

Read current decision plan:

```bash
curl http://127.0.0.1:8000/decision
```

## Decision model

The engine uses an explainable weighted score:

```text
priority = W1 * waiting_time
         + W2 * group_size
         + W3 * stage_urgency
         + W4 * time_since_last_action
         + W5 * congestion_factor
```

Tasks are then assigned to the nearest available staff member to minimize walking distance.
