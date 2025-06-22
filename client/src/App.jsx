import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateEntry from "./pages/CreateEntry";
// import EntryView from "./pages/EntryView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateEntry />} />
        {/* <Route path="/new" element={<EntryForm />} />
        <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
