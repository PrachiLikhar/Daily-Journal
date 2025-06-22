// src/pages/Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
