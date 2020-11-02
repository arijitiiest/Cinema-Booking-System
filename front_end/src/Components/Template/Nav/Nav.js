import React from 'react';
import { Navbar, Nav as Navb, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Nav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect style={{padding: ".5rem"}}>
            
              <Container fluid style={{padding: "0 3rem"}}>
              <LinkContainer to='/'>
                <Navbar.Brand> <div style={{fontSize: 28, letterSpacing: 2}}>Cholochitro Bhobon</div></Navbar.Brand>
              </LinkContainer>            
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" style={{fontSize: 14}}>
                <Navb className="ml-auto">
                <LinkContainer to='/shows'>
                  <Navb.Link> <i className="fas fa-film"></i> Shows</Navb.Link>
                </LinkContainer>
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

