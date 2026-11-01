import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <Sidebar open={menuOpen} onNavigate={closeMenu} />
      {menuOpen && <div className="sidebar-backdrop" onClick={closeMenu} />}

      <main className="main">
        <div className="mobile-topbar">
          <button
            type="button"
            className="menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            &#9776;
          </button>
          <span className="mobile-title">StudentHub</span>
        </div>
        <Outlet />
      </main>
    </div>
  );
}