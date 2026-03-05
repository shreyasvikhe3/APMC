
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


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
  };
  return (
    <Container className="mt-6" style={{ marginTop: '50px',marginBottom: '50px' }}>
      <Card className="p-4 shadow">
        <h4>Registration Form</h4>
        <Form onSubmit={handleSubmit}>

          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Form.Control
            className="mb-2"
            type="email"
            placeholder="Email"
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
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit">Register</Button>

        </Form>
      </Card>
    </Container>
  )
}
