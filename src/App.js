import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import Login from "./Login";
import Register from "./Registration";
import Home from "./Home";
import DashBoard from "./Dashboard"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;