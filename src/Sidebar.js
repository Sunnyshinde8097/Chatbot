import React from "react";
import "./Sidebar.css"; // Add styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard Menu</h2>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Elements</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Presentation Blocks</a></li>
                <li><a href="#">Widgets</a></li>
                <li><a href="#">Tables</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;