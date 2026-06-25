import { useAuth } from "../app/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ allowedRole, children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }
  //wrong role
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // Access granted
  return children;
}
export default ProtectedRoute;
