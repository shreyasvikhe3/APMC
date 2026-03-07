import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import crypto from "crypto";


export const ForgotPassword = ({ users, setUsers }) => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    const handleReset = (e) => {
        e.preventDefault();

        const userIndex = users.findIndex((u) => u.email === email);

        if (userIndex !== -1) {

            const updatedUsers = [...users];
            updatedUsers[userIndex].password = newPassword;

            setUsers(updatedUsers);

            alert("Password Reset Successful ✅");

            navigate("/Login");
        }
        else {
            alert("Email Not Found ❌");
        }
    };


return (
    <>
        <Container className="d-flex justify-content-center align-items-center vh-100">

            <Card className="p-4 shadow" style={{ width: "400px" }}>

                <h3 className="text-center mb-3">पासवर्ड रीसेट</h3>

                <Form onSubmit={handleReset}>

                    <Form.Group className="mb-3">
                        <Form.Label>ईमेल</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="आपला ईमेल टाका"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>नवीन पासवर्ड</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="नवीन पासवर्ड टाका"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button type="submit" variant="success" className="w-100">
                        पासवर्ड अपडेट करा
                    </Button>

                </Form>

            </Card>

        </Container>
    </>
);
};