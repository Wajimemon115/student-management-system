import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/students", label: "Students" },
  { to: "/courses", label: "Courses" },
  { to: "/teachers", label: "Teachers" },
  { to: "/results", label: "Results" },
  { to: "/attendance", label: "Attendance" },
];

export default function Sidebar({ open = false, onNavigate }) {
  const { user, logout } = useAuth();
  const notify = useToast();

  const handleLogout = () => {
    logout();
    notify("You have been logged out");
  };

  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      <div className="brand">
        <div className="brand-logo">S</div>
        <div>
          <div className="brand-title">StudentHub</div>
          <div className="brand-subtitle">Management System</div>
        </div>
      </div>

      <nav className="nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="user-menu">
        <div className="user-info">
          <div className="avatar">
            {(user?.full_name || "?").charAt(0).toUpperCase()}
          </div>
          <div className="user-text">
            <div className="user-name">{user?.full_name}</div>
            <div className="user-role">{user?.role}</div>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </aside>
  );
}