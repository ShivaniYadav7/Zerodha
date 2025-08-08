import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/login`,
        form
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate(redirectPath, { replace: true });
      } else {
        setMessage("Invalid credentials");
      }
    } catch (err) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="container mt-5 p-4" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Login</h2>
      {message && (
        <div className="alert alert-danger text-center">{message}</div>
      )}
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/signup" state={{ from: redirectPath }}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
