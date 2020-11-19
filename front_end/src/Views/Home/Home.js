import React,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import Header from "../../Components/Template/Header/Header";
import Footer from "../../Components/Template/Footer/Footer";
import Navbar from "../../Components/Template/Nav/Nav";
import Movie from "../../Components/Movie/Movie";
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';

import { listMovies } from '../../actions/moviesAction';

import { Container, Row, Col } from 'react-bootstrap';
import "./Home.css";


const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(listMovies())
    }, [dispatch])  
    
    const movieList = useSelector(state => state.movieList)
    const { loading, movies, error } = movieList

    if( loading ) {
        return(
            <div>
                <Navbar/>
                <Loader />
                <Footer/>
            </div>
        )
    } else if(error) {
        return(
            <div>
                <Navbar/>
                <Message variant='danger'> {error} </Message>
                <Footer/>
            </div>
        )
    } else {
        return(
            <div>
                <Navbar/>
                <main className="py-3">
                    <Container>
                        <h1>Latest Movies</h1>
                        <Row>
                            {movies.map((movie, key) => (
                                <Col key={key} sm={12} md={6} lg={4} xl={3}>
                                    <Movie movie={movie} reducer_id={key} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Home;