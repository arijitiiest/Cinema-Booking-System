import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie } from '../../actions/moviesAction'

import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';

import Rating from '../../Components/Rating/Rating'
import Navbar from '../../Components/Template/Nav/Nav'
import './MovieDetails.css'
import Footer from '../../Components/Template/Footer/Footer';

const MovieDetails = ({ history, match }) => {

    const id = match.params.id
    const [language, setLanguage] = useState()
    const findShowHandler = () => {
        history.push(`/shows?movie_id=${id}&language=${language}`)
    }

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
                        <Image src={`/media/${image_url}`} alt={title} fluid style={{ width: "100%", height: "700px"}} /> 
                    </Col>
                    <Col id={id} md={3} className='givepadding'>
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
                                { genres && genres.map((genre, key) => (<strong key={key}> {genre} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Casts:</h5>
                                { casts && casts.map((cast, key) => (<strong key={key}> {cast} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Crews:</h5>
                                { crews && crews.map((crew, key) => (<strong key={key}> {crew} </strong>)) }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Languges :</h5>
                                 { languages && languages.map((lang, key) => (<strong key={key}> {lang} </strong>)) }
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
                                    <Row>
                                        <Col>
                                            <h5 style={{padding: '10px'}}>Language : </h5>
                                        </Col>
                                        <Col xs={7}>
                                            
                                            <Form.Control as='select' value={language} onChange={ e =>setLanguage(e.target.value) } >
                                                { ['select language', ...languages].map((language, id) => (<option key={id} value={language} > {language} </option>))  }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Button onClick={findShowHandler} className='btn-block btn-dark' type='button'>Find Shows</Button>
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
