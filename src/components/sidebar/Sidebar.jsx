import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { TbLogout } from 'react-icons/tb';
import { BsPeopleFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname);
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');

    navigate('/');
  }

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand ">VSR Robot</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          className={`sidebar-list-item ${
            tab === '/dashboard/home' ? 'active' : ''
          }`}
        >
          <a href="/dashboard/home">
            <RxDashboard className="icon" /> <span>Dashboard</span>
          </a>
        </li>
        <li
          className={`sidebar-list-item ${
            tab === '/dashboard/records' ? 'active' : ''
          }`}
        >
          <a href="/dashboard/records">
            <LiaClipboardListSolid className="icon" /> <span>Records</span>
          </a>
        </li>
        <li
          className={`sidebar-list-item ${
            tab === '/dashboard/patients' ? 'active' : ''
          }`}
        >
          <a href="/dashboard/patients">
            <BsPeopleFill className="icon" /> <span>Patients</span>
          </a>
        </li>
        <li className="sidebar-list-item" onClick={handleLogout}>
          <a href="#">
            <TbLogout className="icon" /> <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
