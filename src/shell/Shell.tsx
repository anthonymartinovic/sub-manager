import { NavLink, Outlet } from "react-router-dom";
import logoTrimmed from '../assets/images/logo-trimmed.png';

const logoDimensions: React.CSSProperties = {
  width: '42px',
  height: '21px'
};

export default function Shell() {
  return (
    <div id="Shell" className="d-flex flex-column h-100">
      <ul className="nav nav-tabs pt-2 px-2">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <img src={logoTrimmed} alt="Sub Manager" style={logoDimensions}></img>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/subs" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Subs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/account" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link disabled')}>Account</NavLink>
        </li>
        <li className="nav-item ms-auto">
          <NavLink to="/auth" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link disabled')}>Login</NavLink>
        </li>
      </ul>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
