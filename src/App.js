import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetail from "./component/project/ProjectDetail";
import SignedIn from "./component/auth/SignedIn";
import SignedUp from "./component/auth/SignedUp";
import CreateProject from "./component/project/CreateProject";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetail} />
            <Route path="/signin" component={SignedIn} />
            <Route path="/signup" component={SignedUp} />
            <Route path="/create_project" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
