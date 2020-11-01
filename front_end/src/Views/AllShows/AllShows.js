import React,{ useState, useEffect } from "react";
// import Header from "../../Components/Template/Header/Header";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Show from "../../Components/Movie/Movie";


import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

const Home = () => {
    const [shows, setShows] = useState([]);
    
    // useEffect(() => {
    //     const fetchShows = async () => {
    //         const { data } = await axios.get('/api/shows');
    //         setShows(data);
    //     }

    //     fetchShows()
    // }, [])  
    
    
    return (
        <div>
            <Navbar />
            <main className="py-3">
                <Container>
                    <h1>Latest Shows</h1>
                    <Row>
                        {shows.map(show => (
                            <Col key={show.id} sm={12} md={6} lg={4} xl={3}>
                                <Show movie={show} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default Home;