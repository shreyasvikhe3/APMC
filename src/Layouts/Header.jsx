import React from 'react'
import { Link } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/HOME/APMCLOGO.jpg';
import image from '../Images/HOME/msamb-logo.png';
import '../CSS/Header.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <>
  <div className="top-header d-flex justify-content-between align-items-center px-4 py-2">
    <img src={logo} alt="Logo" className="header-logo" />
    
    <h1 className="header-title text-center">
      कृषी उत्पन्न बाजार समिती, नांदगाव, नाशिक
    </h1>

    <img src={image} alt="Right Logo" className="header-logo" />
  </div>

  <Navbar expand="lg" className="custom-navbar" sticky="top">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-items">
          <Nav.Link as={Link} to="/">होम</Nav.Link>

          <NavDropdown title="संस्था" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Sanstha">स्थापना</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/SabhapatiKaryakal">सभापती कार्यकाळ</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/UpsabhapatiKaryakal">उप सभापती कार्यकाळ</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/SanchalakMandal">संचालक मंडळ</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Karmachari">कर्मचारी वृंद</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="योजना" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/RashtriyKrushi">राष्ट्रीय कृषी बाजार</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ShetmalTaran">शेतमाल तारण योजना</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/KrushiPanan">कृषि पणन पुस्तिका</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Samudra">समुद्रमार्गे अनुदान</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Mhbs">सेवानिवृत्ती वेतन योजना</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/Nondani">नोंदणी</Nav.Link>

          <Nav.Link as={Link} to="/Sampark">संपर्क</Nav.Link>
          <Nav.Link as={Link} to="/Gallary">गॅलरी</Nav.Link>
          <Nav.Link as={Link} to="/Login">लॉगिन</Nav.Link>

          <NavDropdown title="लिलाव टोकन" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Nandgaon">नांदगाव</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Bolthana">बोलठाण</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/Downloads">डाउनलोडस</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>
        // <>
        //     <div className="Container d-flex justify-content-between align-items-center">
        //         <img src={logo} alt="Image Logo" />
        //         <h1>कृषी उत्पन्न बाजार समिती, नांदगाव, नाशिक</h1>
        //         <img src={image} alt="Image Logo" />
        //     </div>
        //     <Navbar expand="lg" className="bg-body-tertiary" >
        //         <Container>
        //             <Navbar.Brand></Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className=" item me-auto">
        //                     <Nav.Link as={Link} to="/">होम</Nav.Link>
        //                     <NavDropdown title="संस्था" id="basic-nav-dropdown">
        //                         <NavDropdown.Item as={Link} to="/Sanstha">स्थापना </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/SabhapatiKaryakal">समितीचे सभापती कार्यकाळ </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/UpsabhapatiKaryakal">समितीचे उप सभापती कार्यकाळ </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/SanchalakMandal">विद्यमान संचालक मंडळ</NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/Karmachari">कर्मचारी वृंद</NavDropdown.Item>
        //                     </NavDropdown>
        //                     <NavDropdown title="योजना" id="basic-nav-dropdown">
        //                         <NavDropdown.Item as={Link} to="/RashtriyKrushi">राष्ट्रीय कृषी बाजार (NAM)  </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/ShetmalTaran">शेतमाल तारण योजना  </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/KrushiPanan">कृषि पणन योजना पुस्तिका  </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/Samudra">समुद्रमार्गे वाहतुक अनुदान योजना  </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/Mhbs">महाराष्ट्र राज्य बाजार समिती कर्मचारी सेवानिवृत्ती वेतन योजना </NavDropdown.Item>
        //                     </NavDropdown>
        //                     <Nav.Link as={Link} to="/Sampark">संपर्क</Nav.Link>
        //                     <Nav.Link as={Link} to="/Gallary">गॅलरी </Nav.Link>
        //                     <Nav.Link as={Link} to="/Login">लॉगिन</Nav.Link>
        //                     <NavDropdown title="लिलाव टोकन" id="basic-nav-dropdown">
        //                         <NavDropdown.Item as={Link} to="/Nandgaon">नांदगाव </NavDropdown.Item>
        //                         <NavDropdown.Item as={Link} to="/Bolthana">बोलठाण </NavDropdown.Item>
        //                     </NavDropdown>
        //                     <Nav.Link as={Link} to="/Downloads">डाउनलोडस</Nav.Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </>
    );
}


