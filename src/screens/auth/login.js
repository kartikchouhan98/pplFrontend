import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props) {
  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  let [result, setResult] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") === "234567890987654456789") {
      props.history.replace("/home");
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      const user = { email, password };
      e.preventDefault();

      Axios.post("http://localhost:1818/login", user).then((res) => {
        console.log("jns",res);
        if (res.data.msg === "Logged in!") {
          props.history.replace("/home");
          
          localStorage.setItem("token", res.data.token);
        }
        setResult(res.data);
      });
    },
    [email, password]
  );

  return (
    <div className="content_rgt">
      <div className="login_sec">
        <h1>Log In</h1>
        <p>{result}</p>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <span>Email-ID</span>

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                style={
                  result === "user not found" ? { border: "2px solid red" } : {}
                }
                placeholder="Enter your email"
                required
              />
            </li>
            <li>
              <span>Password</span>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                style={
                  result === "Incorrect Password!"
                    ? { border: "2px solid red" }
                    : {}
                }
                placeholder="Enter your password"
                required
              />
            </li>
            <li>
              <input type="checkbox" />
              Remember Me
            </li>
            <li>
              <input type="submit" defaultValue="Log In" />
              <Link to="/forgot">Forgot Password</Link>
            </li>
          </ul>
        </form>
        <div className="addtnal_acnt">
          I do not have any account yet.
          <Link to="/">Create My Account Now !</Link>
        </div>
      </div>
    </div>

    //   </div>
    // </div>
  );
}
