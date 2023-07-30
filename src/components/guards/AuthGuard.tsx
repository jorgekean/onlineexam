import * as React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { myAppConfig } from "../../config";

interface AuthGuardType {
  children: React.ReactNode;
}

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }: AuthGuardType) {
  const { isAuthenticated, isInitialized } = useAuth();

  if (isInitialized && !isAuthenticated) {
    return <Navigate to={`/${myAppConfig.baseURL}/auth/sign-in`} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
