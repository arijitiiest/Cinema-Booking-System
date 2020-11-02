import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie } from '../../actions/moviesAction'

import Rating from '../../Components/Rating/Rating'
import Navbar from '../../Components/Template/Nav/Nav'
import axios from 'axios'
import './MovieDetails.css'

const MovieDetails = ({ match }) => {

    const id = match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailMovie(id))
    }, [dispatch, id])  

    const movieDetail = useSelector(state => state.movieDetail)
    const { loading, error, movie } = movieDetail

    

    const [rating, setRating] = useState([{}]);
    useEffect(() => {
        const fetchRating = async () => {
            const { data } = await axios.get(`/api/review-data?movie_id=${match.params.id}`);
            setRating(data);
        }

        fetchRating()
    }, [match.params.id]) 
    const {avg_rating, count_rating} = rating[0]
    const count = parseInt(count_rating)

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
                            <Rating avg_rating={avg_rating} count={count} />
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

export default MovieDetails
