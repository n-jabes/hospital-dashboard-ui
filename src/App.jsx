// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Records from './pages/records/Records';
import Login from './pages/login/Login';
import Patients from './pages/patients/Patients';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <ProtectedRoute element={<Layout />} />,
    children: [
      {
        path: '/dashboard/home',
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: '/dashboard/records',
        element: <ProtectedRoute element={<Records />} />,
      },
      {
        path: '/dashboard/patients',
        element: <ProtectedRoute element={<Patients />} />,
      },
    ],
  },
  {
    path: '/',
    element: <PublicRoute element={<Login />} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
