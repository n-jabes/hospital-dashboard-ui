import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Records from './pages/records/Records';
import Login from './pages/login/Login';
import Patients from './pages/patients/Patients';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/records',
          element: <Records />,
        },
        {
          path: '/patients',
          element: <Patients />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
