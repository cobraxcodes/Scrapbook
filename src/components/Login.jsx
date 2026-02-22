import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "Fatema") {
      navigate("/home");
    } else {
      alert("Boo 👎🏼👎🏼 You Cannot Enter!");
    }
  };

  return (
    <div className="container">
      <h1 className="loginTitle">Hello 💖</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="inputBox"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div>
          <button className="loginBtn" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;