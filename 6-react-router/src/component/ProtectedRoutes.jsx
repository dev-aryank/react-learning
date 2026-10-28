import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../providers/with-auth-provider";

const ProtectedRoutes = () => {

  const location = useLocation();
  const from  = location.pathname;

  const { user } = useAuth();
  const isLoggedIn = user !== null;

  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to={"/login"} state={{from}} replace />;
};

export default ProtectedRoutes;
