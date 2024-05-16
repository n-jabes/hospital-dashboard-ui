import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { TbLogout } from 'react-icons/tb';
import { BsPeopleFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname);
  console.log(tab);

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          My Doctor
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className={`sidebar-list-item ${tab === '/' ? 'active' : ''}`}>
          <a href="/">
            <RxDashboard className="icon"/> <span>Dashboard</span> 
          </a>
        </li>
        <li className={`sidebar-list-item ${tab === '/records' ? 'active' : ''}`}>
          <a href="/records" >
            <LiaClipboardListSolid className="icon" /> <span>Records</span> 
          </a>
        </li>
        <li className={`sidebar-list-item ${tab === '/patients' ? 'active' : ''}`}>
          <a href="/patients" >
            <BsPeopleFill className="icon" /> <span>Patients</span> 
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/login">
            <TbLogout className="icon" /> <span>Logout</span> 
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
