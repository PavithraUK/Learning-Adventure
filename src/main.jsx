import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./app/AuthContext.jsx";
import { ProgressProvider } from "./app/ProgressContext.jsx";
import { RewardsProvider } from "./app/ReducerContext.jsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./features/dashboard/components/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <ProgressProvider>
          <RewardsProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </RewardsProvider>
        </ProgressProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
);
