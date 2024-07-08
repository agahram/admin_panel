import React from "react";
import { NavLink } from "react-router-dom";
import TemporaryDrawer from "./Drawer";

export default function PageNav() {
  return (
    <div>
      <TemporaryDrawer />
      <nav>
        {/* <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}
