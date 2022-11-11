import { NavLink, Outlet } from "react-router-dom";

export default function Shell() {
  return (
    <div id="Shell" className="h-100">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/subscriptions" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Subs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/account" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link disabled')}>Account</NavLink>
        </li>
        <li className="nav-item ms-auto">
          <NavLink to="/auth" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link disabled')}>Login</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
