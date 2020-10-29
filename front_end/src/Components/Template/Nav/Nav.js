import React from 'react';
import { Navbar, Nav as Navb, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Nav = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            
              <LinkContainer to='/'>
                <Navbar.Brand>Cholochitro Bhobon</Navbar.Brand>
              </LinkContainer>            
              
              <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navb className="ml-auto">
                <LinkContainer to='/cart'>
                  <Navb.Link> <i className="fas fa-shopping-cart"></i> Cart</Navb.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Navb.Link> <i className="fas fa-user-circle"></i> Sign In</Navb.Link>
                </LinkContainer>  
                </Navb>
              </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Nav
