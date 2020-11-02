import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie } from '../../actions/moviesAction'

import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';

import Rating from '../../Components/Rating/Rating'
import Navbar from '../../Components/Template/Nav/Nav'
import './MovieDetails.css'
import Footer from '../../Components/Template/Footer/Footer';

const MovieDetails = ({ match }) => {

    const id = match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailMovie(id))
    }, [dispatch, id])  

    const movieDetail = useSelector(state => state.movieDetail)
    const { loading, error, movie } = movieDetail

    if (loading) {
        return(
            <>
                <Navbar/>
                <Loader/>
                <Footer/>
            </>
        )
    } else if (error) {
        return(
            <>
                <Navbar/>
                <Message variant='danger'> {error} </Message>
                <Footer/>
            </>
        )
    } else {

        // eslint-disable-next-line 
        const { title, desc, genres, casts, crews, running_time, format, languages, age_level, image_url} = movie

        return (
            <>
                <Navbar />
                <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
        
                <Row >
                    <Col md={1}></Col>
                    <Col md={3} className='givepadding'>
                        <Image src={image_url} alt={title} fluid style={{ width: "100%", height: "700px"}} /> 
                    </Col>
                    <Col md={3} className='givepadding'>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2> {title} </h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating id={id} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Description : </h5>
                                <strong> {desc} </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Genres: </h5>
                                { genres && genres.map(genre => (<strong> {genre} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Casts:</h5>
                                { casts && casts.map(cast => (<strong> {cast} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Crews:</h5>
                                { crews && crews.map(crew => (<strong> {crew} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Languges :</h5>
                                 { languages && languages.map(language => (<strong> {language} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Other Details :</h5>
                                <strong>The show is available in {format} format and the duration of the film is {running_time} hrs. The minimum age of the viewer must be above {age_level} years </strong>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} className='givepadding'>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3> Book Shows </h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to={`/`}>
                                        <Button className='btn-block btn-dark' type='button'>Find Shows</Button>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row> 
            </>
        )
    }
}

export default MovieDetails
