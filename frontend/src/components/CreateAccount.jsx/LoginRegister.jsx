import React from "react";
import { useState } from "react";
import "./LoginRegister.css";
import { useAuth } from "../../Store/auth";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);  // Toggle between login and register
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { StoreTokenInLS } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    const url = isLogin ? "http://localhost:5000/api/auth/login" : "http://localhost:5000/api/auth/register";
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify(formData);

    try {
      const response = await fetch(url, { method, headers, body });

      if(response.ok){
        const login_data = await response.json();
        console.log(login_data)
        StoreTokenInLS(login_data.token)
        setFormData({
          email: "",
          password: "",
        })
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="perform-auth-container">
      <div className="auth-form">
        <div className="login-form">
          <h2 className="form-heading">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-field">
              <label htmlFor="email">Username and email address*</label>
              <input
                type="text"
                name="email"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password*</label>
              <input
                type="text"
                name="password"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-row">
              <div>
                <input type="checkbox" />
                <span> Remember me</span>
              </div>
              <input type="submit" value="Login" className="auth-form-btn" />
              <p className="lost_password">Lost your password?</p>
            </div>
          </form>
        </div>
        <div className="register-form">
          <h2 className="form-heading">Register</h2>
          <form action="" className="form">
            <div className="input-field">
              <label htmlFor="email">Email address*</label>
              <input
                type="text"
                name="email"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password*</label>
              <input
                type="text"
                name="password"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="term-condition">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span style={{ color: "rgba(170, 171, 116, 1)" }}>
                  privacy policy.
                </span>
              </p>
            </div>
            <input type="submit" value="Register" className="auth-form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
