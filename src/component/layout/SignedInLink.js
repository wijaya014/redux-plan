import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedInLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create_project">New project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          AW
        </NavLink>
      </li>
    </ul>
  );
}
