import React, { useState } from "react";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedEmail = Cookies.get("email");
        const storedPassword = Cookies.get("password");

        if (email === storedEmail && password === storedPassword) {
            setPopupMessage("Login successful! Redirecting...");
            setShowPopup(true);

            setTimeout(() => {
                window.location.href = "/employee";
            }, 2000);
        } else {
            setPopupMessage("Invalid email or password. Try again.");
            setShowPopup(true);
        }
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
            <img src="./Images/Webiknowns.png" alt="Webiknowns Logo" className="company-logo" />
             </div>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto p-4 border rounded shadow">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>{popupMessage}</p>
                        <button className="btn btn-secondary mt-2" onClick={() => setShowPopup(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
