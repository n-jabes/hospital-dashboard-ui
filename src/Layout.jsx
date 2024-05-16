import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <Outlet />
    </div>
  );
}

export default Layout;
