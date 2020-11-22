import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer style={{ background: '#3d3d3d', color: 'white', padding:'15px'}}>
            <Container>
                <Row>
                    <Col>
                        <strong style={{ fontWeight : 'bold'}}> &nbsp; &nbsp; Get to know us</strong>
                        <ul>
                            <li>About Us</li>
                            <li>Press Releases</li>
                            <li>Gift a Smile</li>
                        </ul>
                    </Col>
                    <Col>
                        <strong style={{ fontWeight : 'bold'}}>&nbsp; &nbsp; Connect with us</strong>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </Col>
                    <Col>
                        <strong style={{ fontWeight : 'bold'}}>&nbsp; &nbsp; Make money with us</strong>
                        <ul>
                            <li>Apply for sponsor</li>
                            <li>Set up a food counter</li>
                            <li>Advertise your Products</li>
                        </ul>
                    </Col>
                    <Col>
                        <strong style={{ fontWeight : 'bold'}}> &nbsp; &nbsp; Let us help you</strong>
                        <ul>
                            <li>Covid-19</li>
                            <li>Cholochitro Bhobon App</li>
                            <li>Help Center</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Cholochitro Bhobon</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
