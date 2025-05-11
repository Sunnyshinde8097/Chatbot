import React from "react";
import "./Sidebar.css"; // Add styling

const Sidebar = () => (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </div>
  );
  
export default Sidebar;