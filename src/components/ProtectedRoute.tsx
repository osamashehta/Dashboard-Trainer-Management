import React, { useState } from "react";
import { Navigate } from "react-router-dom";
type Inputs = {
  email: string;
  password: string;
};
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user] = useState<Inputs>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : {}
  );
  if (user.email && user.password) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
