import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      result: "",
      user_border: "",
      email_border: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token") === "234567890987654456789") {
      this.props.history.replace("/home");
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    const user = this.state;
    e.preventDefault();
    console.log(this.state);
    this.setState({ user_border: "", email_border: "" });

    Axios.post("http://localhost:1818/adduser", user).then((res) => {
      console.log(res);

      this.setState({ result: res.data.msg, [res.data.ele]: "2px solid red" });
      if (this.state.result === "SignUp successful") {
        this.props.history.replace("/login");
        console.log(this.props);
      }
    });
  };
  render() {
    return (
      <div className="content_rgt">
        <div className="register_sec">
          <h1>Create An Account</h1>
          <p>{this.state.result}</p>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  style={{ border: this.state["user_border"] }}
                  value={this.state.username}
                  placeholder="Enter your username"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{ border: this.state["email_border"] }}
                  value={this.state.email}
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                  required
                />
              </li>

              <li>
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="Enter your first name"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Enter your last name"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <input type="checkbox" required />I agree to Term &amp;
                Conditions
              </li>
              <li>
                <input type="submit" defaultValue="Register" />
              </li>
            </ul>
          </form>
          <div className="addtnal_acnt">
            I already have an account.
            <Link to="/login">Login My Account !</Link>
          </div>
        </div>
      </div>
    );
  }
}
