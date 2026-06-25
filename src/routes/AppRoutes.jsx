import { Route, Routes } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../features/auth/pages/LoginPage";
import ParentDashboard from "../features/auth/pages/ParentDashboard";
import StudentDashboard from "../features/auth/pages/StudentDashboard";
import LessonPage from "../features/lessons/pages/LessonPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent/dashboard"
          element={
            <ProtectedRoute allowedRole="parent">
              <ParentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lesson/:subject"
          element={
            <ProtectedRoute allowedRole="student">
              <LessonPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
export default AppRoutes;
