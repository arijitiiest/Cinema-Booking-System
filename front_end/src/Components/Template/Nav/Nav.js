import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav as Navb, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../../../actions/userActions'
import SearchBox from '../../SearchBox/SearchBox'

const Nav = () => {

  // eslint-disable-next-line
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect style={{padding: '1.0rem'}}  >
    
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand> <div>Cholochitro Bhobon</div></Navbar.Brand>
                </LinkContainer> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Route render={({ history }) => <SearchBox history={history}/> }/>
                  <Navb className="ml-auto">
                    <LinkContainer to='/shows'>
                      <Navb.Link> <i className="fas fa-film"></i> Shows</Navb.Link>
                    </LinkContainer>
                    { userInfo ? (
                        <NavDropdown title={userInfo.first_name} id='username' >
                          <LinkContainer className='btn' style={{backgroundColor: 'white', color: 'black'}} to='/'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Item className='btn' onClick={logoutHandler}>
                            Logout
                          </NavDropdown.Item>

                        </NavDropdown>
                    ) :
                      <LinkContainer to='/login'>
                        <Navb.Link> <i className="fas fa-user-circle"></i> Sign In</Navb.Link>
                      </LinkContainer> 
                    }  
                  </Navb>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default Nav

