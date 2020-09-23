import React, { Component } from "react";

export default class uploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      title: "",
      category: "",
      file: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          action="http://localhost:1818/upload"
          enctype="multipart/form-data"
          method="POST"
        >
          <label>Username:</label>
          <input
            type="username"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <label>title:</label>
          <input
            type="title"
            name="title"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <label>category:</label>
          <input
            type="category"
            name="category"
            value={this.state.category}
            placeholder="category"
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <label>File:</label>
          <input
            type="file"
            name="file"
            value={this.state.file}
            onChange={this.handleChange}
            required
          />
          <br />

          <input type="submit" value="submit" />
        </form>

        <button onClick={this.props.closePopup}>close me</button>
      </div>
    );
  }
}
