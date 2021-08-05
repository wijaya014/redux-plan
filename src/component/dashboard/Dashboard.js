import React from "react";
import Notification from "./Notification";
import ProjectList from "../project/ProjectList";

function Dashboard() {
  return (
    <div className="dasborad container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList />
        </div>
        <div className="s12m 5 offset m1">
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
