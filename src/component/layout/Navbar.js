import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

export default function Navbar() {
  return (
    <nav className="nav-wrapper grey darked">
      <div className="container">
        <Link to="/" className="brand-logo">
          Redux plan
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
}
