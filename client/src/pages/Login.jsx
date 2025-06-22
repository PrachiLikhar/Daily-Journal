// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Later replace this with real API
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side (optional image or quote) */}
      <div className="hidden md:flex w-1/2 bg-blue-100 items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome Back!
          </h2>
          <p className="text-gray-600">Start writing your thoughts again 💭</p>
          {/* You can add an image or illustration here if you want */}
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Login to Journal
          </h2>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
