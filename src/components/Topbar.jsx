
import { Search, Bell } from 'lucide-react';

function Topbar() {
  return (
    <header className="topbar">
      <div className="breadcrumb">
        Workspace <span>/</span> <strong>Dashboard</strong>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <Search size={17} />
          <input placeholder="Search inventory..." />
        </div>

        <button className="notification-button">
          <Bell size={19} />
        </button>

        <div className="topbar-avatar">AD</div>
      </div>
    </header>
  );
}

export default Topbar;
