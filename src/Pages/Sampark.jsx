
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import '../CSS/Sampark.css'


export const Sampark = ({ addUser }) => {

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
    <div className="content">
    <Container className="mt-6 d-flex justify-content-center align-items-center vh-100" style={{ marginTop: '50px',marginBottom: '50px' }}>
      <Card className="p-4 shadow bg-dark text-white">
        <h4>नोंदणी अर्ज</h4>
        <Form onSubmit={handleSubmit}>

          <Form.Control
            className="mb-2"
            type="text"
            placeholder="नाव"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Form.Control
            className="mb-2"
            type="email"
            placeholder="ईमेल"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
{/* 
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Roll No"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
          /> */}

          <Form.Control
            className="mb-2"
            type="password"
            placeholder="पासवर्ड"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit">नोंदणी करा</Button>

        </Form>
      </Card>
    </Container>
    </div>
    </>
  )
}
