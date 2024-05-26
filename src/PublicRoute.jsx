// PublicRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to="/dashboard/home" replace />;
  }

  return element;
};

export default PublicRoute;
