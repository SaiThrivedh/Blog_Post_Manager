import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import axios from "axios";

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const res = await api.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    const role = res.data.user.role;

    if (role === "superadmin") navigate("/superadmin");
    else if (role === "admin") navigate("/admin");
    else navigate("/");
  } catch (err: any) {
    console.log(err);

    alert(
      err?.response?.data?.message ||
      err?.message ||
      "Login failed"
    );
  }
};
  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}