import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Forgot = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post("http://localhost:8000/api/forgot-password", { email });

        alert("OTP sent to email");

        navigate("/verify-otp", { state: { email } });

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Send OTP</button>

        </form>

    );
};