import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Reset = () => {

    const [password, setPassword] = useState("");

    const location = useLocation();
    const email = location.state.email;

    const navigate = useNavigate();

    const handleReset = async (e) => {

        e.preventDefault();

        await axios.post("http://localhost:8000/api/reset-password", {
            email,
            password
        });

        alert("Password Updated");

        navigate("/login");

    };

    return (

        <form onSubmit={handleReset}>

            <input
                type="password"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Reset Password</button>

        </form>

    );
};