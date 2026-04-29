import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="boot-error">
          <h1>Smart Restaurant OS</h1>
          <p>The interface hit a startup error.</p>
          <pre>{this.state.error.message}</pre>
          <button onClick={() => {
            localStorage.removeItem("sros-user");
            window.location.reload();
          }}>
            Reset session and reload
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
);
