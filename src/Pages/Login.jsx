// import React from 'react'
// import { Container, Form, Row,Col,Button } from 'react-bootstrap';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// export const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const[loading,setLoading]=React.useState(false);

//   const handle=async(e)=>{
//     e.preventDefault();//hold the page
//     setLoading(true);
//     try {
//       const formData=new FormData();
//       formData.append('email',email);
//       formData.append('password',password);
      
//       const config={
//         headers:{
//           'Content-Type':'multipart/form-data',
//         },
//       };

//       const res=await axios.post('http://localhost:8000/UserRoute/User',formData,config);
//       console.log("res", res);
//       if(res.status==200 || res.status==201){
//         alert('Login successful');
//         navigate('/Home');
//         resetForm();
//       }
//       else{
//         alert('Login failed');
//       }
//     }
//     catch(err){
//       console.log(err);
//       alert('An error occurred during login');
//     }
//     finally{
//       setLoading(false);
//     }
//   };

//     const resetForm=()=>{
//       setEmail('');
//       setPassword('');
//     };
//   return (
//     <>
//     <Container>
//       <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
//         <Col md={6} className="d-flex flex-column align-items-center">
//           <h1 className="mb-4">Login</h1>
//           <Form onSubmit={handle} style={{ width: '100%' }}>
//             <Form.Group controlId="formBasicEmail" className="mb-3">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword" className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </Button>
//           </Form>
//           </Col>
//           </Row>
//     </Container>
//     </>
//   )
// }
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = ({ users }) => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      alert("Login Successful ✅");
      navigate("/");
    } else {
      alert("Invalid Password ❌");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow bg-dark text-white" style={{ width: "350px" }}>
        <h4 className="text-center">लॉगिन</h4>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
                  <Form onSubmit={handleLogin}>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            className="mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};