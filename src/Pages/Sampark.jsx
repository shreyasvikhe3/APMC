import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export const Sampark = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">

        {/* Contact Form */}
        <Col md={6} sm={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                संपर्क फॉर्म
              </Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>नाव</Form.Label>
                  <Form.Control type="text" placeholder="आपले नाव टाका" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>ईमेल</Form.Label>
                  <Form.Control type="email" placeholder="आपला ईमेल टाका" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>मोबाईल नंबर</Form.Label>
                  <Form.Control type="text" placeholder="मोबाईल नंबर" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>संदेश</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="आपला संदेश लिहा" />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  पाठवा
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Address Card */}
        <Col md={6} sm={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                APMC पत्ता
              </Card.Title>

              <p><strong>संस्था नाव:</strong> कृषी उत्पन्न बाजार समिती</p>
              <p><strong>ठिकाण:</strong> नांदगाव, नाशिक</p>
              <p><strong>पिन कोड:</strong> 423106</p>
              <p><strong>फोन:</strong> 02552-XXXXXX</p>
              <p><strong>ईमेल:</strong> apmcnandgaon@gmail.com</p>

              <hr />

              <p>
                <strong>पत्ता:</strong><br/>
                कृषी उत्पन्न बाजार समिती,<br/>
                नांदगाव, जिल्हा नाशिक,<br/>
                महाराष्ट्र, भारत
              </p>

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};