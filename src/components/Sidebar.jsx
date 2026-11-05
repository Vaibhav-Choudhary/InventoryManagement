
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  Factory,
  ChartNoAxesCombined,
  Settings,
  Boxes
} from 'lucide-react';

function Sidebar() {
  const menuGroups = [
    {
      title: 'WORKSPACE',
      items: [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Products', path: '/products', icon: Package }
      ]
    },
    {
      title: 'INVENTORY',
      items: [
        { name: 'Stock In', path: '/stock-in', icon: ArrowDownToLine },
        { name: 'Stock Out', path: '/stock-out', icon: ArrowUpFromLine },
        { name: 'Production', path: '/production', icon: Factory }
      ]
    },
    {
      title: 'MANAGEMENT',
      items: [
        { name: 'Reports', path: '/reports', icon: ChartNoAxesCombined },
        { name: 'Settings', path: '/settings', icon: Settings }
      ]
    }
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Boxes size={23} />
        </div>
        <div>
          <h2>Stockwise</h2>
          <span>INVENTORY MANAGEMENT</span>
        </div>
      </div>

      <div className="workspace-box">
        <div className="workspace-avatar">AC</div>
        <div>
          <strong>Acme Corporation</strong>
          <span>My Workspace</span>
        </div>
      </div>

      <nav>
        {menuGroups.map(group => (
          <div className="menu-group" key={group.title}>
            <p className="menu-heading">{group.title}</p>

            {group.items.map(item => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-item ${isActive ? 'active' : ''}`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-profile">
        <div className="profile-avatar">AD</div>
        <div>
          <strong>Admin User</strong>
          <span>Administrator</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
