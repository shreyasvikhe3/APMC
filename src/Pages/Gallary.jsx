import React from "react";
import { Table, Button, Container } from "react-bootstrap";

export const Gallary =  ({ users, deleteUser }) => {

  return (
    <Container className="mt-4">
      <h4>User List</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.rollno}</td>
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
