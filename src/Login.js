import React, { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve stored registration data from cookies
        const storedEmail = Cookies.get("email");
        const storedPassword = Cookies.get("password");

        // Validate login credentials
        if (email === storedEmail && password === storedPassword) {
            setMessage("Login successful! Redirecting...");
            console.log("Logged in:", { email, password });

            setTimeout(() => {
                window.location.href = "/Home"; 
            }, 2000);
        } else {
            setMessage("Invalid email or password. Try again.");
        }
    };

    return (
        <div className="container mt-5">
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

            {/* Success/Error Message */}
            {message && <p className="text-center mt-3 text-danger">{message}</p>}
        </div>
    );
};

export default Login;