import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { TbLogout } from 'react-icons/tb';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">My Doctor</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <RxDashboard className="icon" /> <span>Dashboard</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <LiaClipboardListSolid className="icon" /> <span>Records</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <TbLogout className="icon" /> <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
