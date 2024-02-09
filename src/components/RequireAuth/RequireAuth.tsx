import React, { ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LocalStorage } from '../../utils/LocalStorage';
interface RequireAuthProps {
  children: React.ReactNode;
  redirectTo: string;
}
const RequireAuth = ({ children, redirectTo }: RequireAuthProps) => {
  const userId = LocalStorage.getAccessToken();
  return userId ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
