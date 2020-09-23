import React, { useState, useCallback } from "react";
import Axios from "axios";

export default function Forgot() {
  let [email, setEmail] = useState("");
  let [result, setResult] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      const user = { email };
      e.preventDefault();

      Axios.post("http://localhost:1818/forgot", user).then((res) => {
        console.log(res);

        setResult(res.data);
      });
    },
    [email]
  );
  return (
    <div className="content_rgt">
      <div className="register_sec">
        {result}
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <span>Enter E-mail ID</span>
            <input
              type="email"
              placeholder="User@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul></form>
      </div>
    </div>
  );
}
