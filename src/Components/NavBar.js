import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';





function NavBar() {
    return (
       
      <div className="listing-container">
  
        <Navbar bg="primary" variant="dark">
          <Container>
    
            <Navbar.Brand as={Link} to="/">Amazon</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
            </Nav>
           
          </Container>
        </Navbar>
      </div>

    );
  }

export default NavBar