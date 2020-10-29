import React,{ useState, useEffect } from "react";
// import Header from "../../Components/Template/Header/Header";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Movie from "../../Components/Movie/Movie";


import { Container, Row, Col } from 'react-bootstrap';
import "./Home.css";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('/api/movies');
            setMovies(data);
        }

        fetchMovies()
    }, [])  
    
    
    return (
        <div>
            <Navbar />
            <main className="py-3">
                <Container>
                    <h1>Latest Movies</h1>
                    <Row>
                        {movies.map(movie => (
                            <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                                <Movie movie={movie} />
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