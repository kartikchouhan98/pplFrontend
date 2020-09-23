import React, { Component } from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      result: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    const user = this.state;
    e.preventDefault();
    console.log(this.state);

    Axios.post("http://localhost:1818/login", user).then((res) => {
      console.log(res);

      this.setState({ result: res.data });
      this.setState({
        email: "",
        password: "",
      });
    });
  };
  render() {
    return (
            <div className="content_rgt">
              <div className="login_sec">
                <h1>Log In</h1>
                <p>{this.state.result}</p>
                <ul>
                  <li>
                    <span>Email-ID</span>

                    <input
                      type="text"
                      onChange={this.handleChange}
                      name="email"
                      style={
                        this.state.result === "user not found"
                          ? { border: "2px solid red" }
                          : {}
                      }
                      placeholder="Enter your email"
                    />
                  </li>
                  <li>
                    <span>Password</span>
                    <input
                      type="text"
                      name="password"
                      onChange={this.handleChange}
                      style={
                        this.state.result === "Incorrect Password!"
                          ? { border: "2px solid red" }
                          : {}
                      }
                      placeholder="Enter your password"
                    />
                  </li>
                  <li>
                    <input type="checkbox" />
                    Remember Me
                  </li>
                  <li>
                    <input
                      type="submit"
                      defaultValue="Log In"
                      onClick={this.handleSubmit}
                    />
                    <a href>Forgot Password</a>
                  </li>
                </ul>
                <div className="addtnal_acnt">
                  I do not have any account yet.
                  <Link to='/'>Create My Account Now !</Link>
                </div>
              </div>
            </div>
            
        //   </div>
        // </div>
       
    );
  }
}
