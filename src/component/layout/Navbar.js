import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = () => {
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
};
const mapStateToProps = (state) => {
  console.log("state ", state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
