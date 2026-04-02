
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn, getUser } from "../utils/auth";

export default function ProtectedRoute({ allowedRoles }: any) {
    
  const user = getUser();

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}