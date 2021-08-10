import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectAction";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
    console.log("state : ", this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form action="" className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button
              className="btn pink lighten-1 z-depth-0"
              onClick={this.handleClick}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
