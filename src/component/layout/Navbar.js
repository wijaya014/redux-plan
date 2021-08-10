import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLink /> : <SignedOutLink />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Redux plan
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
