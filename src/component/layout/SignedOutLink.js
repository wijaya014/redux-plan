import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOutLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </ul>
  );
}
