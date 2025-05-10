import React, { useState } from "react";
import Cookies from "js-cookie";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Save data in cookies
        Cookies.set("email", email, { expires: 7 }); // Cookie expires in 7 days
        Cookies.set("password", password, { expires: 7 });

        // Show success message
        setMessage("Registration successful!");

        console.log("Registered", { email, password });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registration</h2>
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
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
            
            {/* Success Message */}
            {message && <p className="text-success text-center mt-3">{message}</p>}
        </div>
    );
};

export default Register;