// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 text-center p-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        📓 Daily Journal
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        Capture your thoughts. Track your mood. Stay mindful.
      </p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-white border px-6 py-2 rounded-lg text-blue-600 hover:bg-gray-100">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
