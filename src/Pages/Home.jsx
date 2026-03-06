import React from 'react'
import '../CSS/Home.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from "react-router";
import MyImage from '../Images/HOME/apmc-nandgaon.jpg';
import Image from '../Images/HOME/देवेंद्र_फडणवीस.jpeg';
import Image1 from '../Images/HOME/Eknath-shinde1.jpg';
import Image2 from '../Images/HOME/Sunetra-Pawar-2.avif';
import Image3 from '../Images/HOME/IMG-20250517-WA0047.jpg';
export const Home = () => {
  return (
  <>
      <div className="hero d-flex align-items-center">
        <div className="container hero-content text-center">

          <h1 className="display-4 fw-bold mt-3">
            कृषी उत्पन्न बाजार समिती, नांदगाव, नाशिक
          </h1>

          <div className="d-flex justify-content-center gap-3 flex-wrap" style={{ marginTop: "30px" }}>
            <Link to="/Login" className="btn btn-dark btn-lg" style={{ backgroundColor: "#626a20", borderColor: "#626a20" }}>
              लॉगिन करा
            </Link>
            <Link to="/Sampark" className="btn btn-light btn-lg" style={{ backgroundColor: "#030303",color:"white" }}>
              साइन इन करा
            </Link>
          </div>
        </div>
      </div>
      <div className='content-info1'>
      <Container className="content-info py-5">
        <Row className="content-row align-items-center">
          <Col md={6} className='info'>
            <h1 className="fw-bold">कृषी उत्पन्न बाजार समिती नांदगांव</h1>
            <p className="mt-3 fw-bold " >
              कृषी उत्पन्न बाजार समिती नांदगांव जि.नाशिक या बाजार समितीची स्थापना महाराष्ट्र राज्य राजपत्र दिनांक 2-9-1948 भाग ब मध्ये 773 या पानावर नोटीफिकेशन नंबर 7467-45 अ मध्ये प्रसिद्ध झाले आहे. प्रत्यक्ष कामास सुरुवात दिनांक 1/11/1948 पासून झाले आहे
            </p>
            <h1 className="fw-bold">नांदगांव कृषी उत्पन्न बाजार समिती विभाजन</h1>
            <p className="mt-3 fw-bold" >


              नांदगांव बाजार समितीचे दिनांक 18/7/1985 रोजी विभाजन होवून मनमाड बाजार समिती अस्तित्वात आली. नांदगांव तालुक्यातील त्यावेळेच्या 93 गावांपैकी 67 गावांचा समावेश नांदगांव बाजार समितीचे कार्यक्षेत्रात झालेला आहे. सदर कार्यक्षेत्राची विभागणी दिनांक 18/07/1985 पासून महाराष्ट्र शासन राजपत्र पान नं. 885 या पाना मध्ये प्रसिद्ध झाले आहे. नांदगांव बाजार समितीचे नांदगांव हे मुख्य बाजार आवार असुन १) बोलठाण २) न्यायडोंगरी ही दोन उपबाजार आवार आहेत. तिनही गावांना आठवडे बाजार भरतात.
            </p>
            <h1 className="fw-bold">नांदगांव कृषी उत्पन्न बाजार समिती चे दोन उपबाजार आवार</h1>
            <p className="mt-3 fw-bold" >
              नांदगांव बाजार समितीचे मुख्य यार्ड नांदगांवसह

              १) बोलठाण उपबाजार - सदर यार्डची शासन अधिसुचना दि. 16/06/1960. बोलठाण उपबाजारावर स्वमालिकीची 2.00 हेक्टर जमिन आहे. सदर यार्डवर शेतमाल लिलावाचे कामकाज चालते. यात प्रामुख्याने कांदा शेतमालाचा लिलाव होतो. त्यानंतर मका व इतर धान्य , कडधान्य यांचाही लिलाव होतो.

              २) न्यायडोंगरी उपबाजार - सदर यार्डची शासन अधिसुचना दि. 03/12/1980. न्यायडोंगरी उपबाजारावर स्वमालिकीची 1 हेक्टर 30 आर. जमिन आहे. सदर यार्डवर शेतमाल लिलावाचे कामकाज चालते. यात प्रामुख्याने फक्त मका शेतमालाचा लिलाव होतो.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={MyImage}
              alt="Coding"
              className="img-fluid rounded shadow"
            />
          </Col>

        </Row>
      </Container>
          </div>
          {/* <div className='container-fluid d-flex align-items-center text-center justify-content-center flex-column py-5'>
            <h1 className='fw-bold'>सन्माननिय पदाधिकारी</h1>
          </div> */
          /* <div className='container d-flex
          flex-wrap align-items-center justify-content-center gap-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title className='fw-bold'>मा.ना.श्री. देवेंद्र फडणवीस</Card.Title>
                <Card.Text>
                  मुख्यमंत्री
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className='fw-bold'>मा.ना. श्री. एकनाथ शिंदे</Card.Title>
                <Card.Text>
                  उपमुख्यमंत्री.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className='fw-bold'>मा.ना. श्री. सुनेत्रा पावार</Card.Title>
                <Card.Text>
                  उपमुख्यमंत्री.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title className='fw-bold'>मा.ना. श्री. एकनाथ शिंदे</Card.Title>
                <Card.Text>
                  उपमुख्यमंत्री.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className='fw-bold'>मा.ना. श्री. एकनाथ शिंदे</Card.Title>
                <Card.Text>
                  उपमुख्यमंत्री.
                </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
    </>
  )
}
