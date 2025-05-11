import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import Login from "./Login";
import Register from "./Registration";
import Home from "./Home";
import DashBoard from "./Dashboard";
import EmployeeTable from "./EmployeeTable";
import EmployeeProfile from './EmployeeProfile'; 
import AddEmployee from "./AddEmployee";

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sunny Shinde",
      position: "Software Engineer",
      skill: "React, Node.js",
      bio: "Passionate full-stack developer.",
      experience: "5 years",
      hobby: "Reading tech blogs",
    },
    {
      id: 2,
      name: "Kumesh Kumar",
      position: "Team Lead",
      skill: "Java, Spring Boot",
      bio: "Leading by example.",
      experience: "8 years",
      hobby: "Cricket",
    },
    {
      id: 3,
      name: "Jagdish Shirast",
      position: "Senior QA Tester",
      skill: "Manual, Selenium",
      bio: "Quality is key.",
      experience: "6 years",
      hobby: "Chess",
    },
    {
      id: 4,
      name: "Vaibhav Ghanekar",
      position: "Software Developer",
      skill: "Angular, .NET",
      bio: "Front and back-end developer.",
      experience: "4 years",
      hobby: "Photography",
    },
    {
      id: 5,
      name: "Deepali Bhor",
      position: "Software Developer",
      skill: "Flutter, Firebase",
      bio: "Cross-platform enthusiast.",
      experience: "3 years",
      hobby: "Sketching",
    },
    {
      id: 6,
      name: "Aman Yadav",
      position: "Full Stack Developer",
      skill: "MERN Stack",
      bio: "From UI to API.",
      experience: "5 years",
      hobby: "Gaming",
    },
  ]);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/employee" element={<EmployeeTable employees={employees} />} />
        <Route path="/EmployeeProfile/:id" element={<EmployeeProfile employees={employees} />} />
        <Route path="/AddEmployee" element={<AddEmployee setEmployees={setEmployees} employees={employees} />} />
      </Routes>
    </Router>
  );
};

export default App;