
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import signupImg from "../Images/UI/Screenshot 2026-03-06 104100.png"; // add your image
import '../CSS/Nondani.css'


export const Nondani = ({ addUser }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        rollno: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(formData);

        setFormData({
            name: "",
            email: "",
            password: "",
            rollno: ""
        });
        alert("Registration Successful ✅");
    };
    return (
        <>
            <div className="main-bg">
                <Container className="">
                    <Row className="align-items-center">

                        {/* Image Section */}
                        <Col md={6} className="mb-4">
                            <img
                                src={signupImg}
                                alt="Signup"
                                className="img-fluid rounded shadow"
                            />
                        </Col>

                        {/* Signup Form */}
                        <Col md={6} className="mb-4">
                            <Card className="shadow p-4 my-5">
                                <Card.Body>

                                    <h3 className="text-center mb-4">नोंदणी करा</h3>

                                    <Form onSubmit={handleSubmit}>

                                        <Form.Group className="mb-3">
                                            <Form.Label>नाव</Form.Label>
                                            <Form.Control type="text" name="name" placeholder="आपले नाव" value={formData.name}
                                                onChange={handleChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>ईमेल</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="आपला ईमेल" value={formData.email}
                                                onChange={handleChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>मोबाईल नंबर</Form.Label>
                                            <Form.Control type="text" placeholder="मोबाईल नंबर" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>पासवर्ड</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="पासवर्ड" value={formData.password}
                                                onChange={handleChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>पासवर्ड पुन्हा टाका</Form.Label>
                                            <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                                        </Form.Group>

                                        <Button type="submit" variant="success" className="w-100">
                                            साइन अप
                                        </Button>

                                        <div className="text-center mt-3">
                                            आधीच खाते आहे? <a href="/Login">लॉगिन करा</a>
                                        </div>

                                    </Form>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    )
}
