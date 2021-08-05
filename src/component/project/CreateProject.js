import React, { Component } from "react";

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
    console.log("state : ", this.state);
  };
  render() {
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

export default CreateProject;
