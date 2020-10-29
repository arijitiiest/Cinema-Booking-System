import React,{ useState, useEffect } from "react";
// import Header from "../../Components/Template/Header/Header";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Movie from "../../Components/Movie/Movie";


import { Container, Row, Col } from 'react-bootstrap';
import "./Home.css";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([{"id":1,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/devi.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":3,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/gupigayin.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":4,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/joybabafelunath.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":5,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/sonarkella.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":6,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/devi.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":7,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/devi.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":8,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/sonarkella.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"},
    {"id":9,"title":"abc","desc":"asdfghm","genres":["asdfghjk"],"casts":["fghj"],"crews":["fghjk"],"running_time":7,"format":"2D","languages":["sdfghj"],"age_level":7,"image_url":"/images/twodaughters.jpg","createdAt":"2020-10-28T18:39:50.169Z","updatedAt":"2020-10-28T18:39:50.169Z"}]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('/api/movies');
            setMovies(data);
        }
    })
    
    
    
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