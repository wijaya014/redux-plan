import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dasborad container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="s12m 5 offset m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("this obj ", state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: "projects" }])
// )(Dashboard);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(Dashboard);
