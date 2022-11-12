import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";

export default function Shell() {
  return (
    <div id="Shell" className="d-flex flex-column h-100">
      <Nav></Nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
