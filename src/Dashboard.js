import React from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h2>Welcome to the Dashboard</h2>
                <div className="widgets">
                    <div className="widget">
                        <h3>New Accounts</h3>
                        <p>586,356</p>
                    </div>
                    <div className="widget">
                        <h3>Sales</h3>
                        <p>23,274</p>
                    </div>
                    <div className="widget">
                        <h3>Revenue</h3>
                        <p>$9,693</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;