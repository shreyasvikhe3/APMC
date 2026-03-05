import React from "react";
import { Table, Button, Container } from "react-bootstrap";

export const Gallary =  ({ users, deleteUser }) => {

  return (
    <Container className="mt-4 bg-dark text-white p-4 min-vh-100" style={{marginTop:"50px",marginBottom:"50px"}}>
      <h4>वापरकर्त्यांची यादी</h4>

      <Table striped bordered hover >
        <thead>
          <tr>
            <th>नाव</th>
            <th>ईमेल</th>
            <th>पासवर्ड</th>
            {/* <th>Roll No</th> */}
            <th>कृती</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              {/* <td>{user.rollno}</td> */}
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </Button>{" "}
                <Button
                  variant="warning"
                  size="sm"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  );
};
