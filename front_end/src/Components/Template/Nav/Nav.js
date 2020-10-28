import React from 'react';
import { Navbar, Nav as Navb, Container } from 'react-bootstrap';

const Nav = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            
              <Navbar.Brand href="/">Cholochitro Bhobon</Navbar.Brand>
              <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navb className="ml-auto">
                  <Navb.Link href="/cart"> <i className="fas fa-shopping-cart"></i> Cart</Navb.Link>
                  <Navb.Link href="/login"> <i className="fas fa-user-circle"></i> Sign In</Navb.Link>  
                </Navb>
              </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Nav

