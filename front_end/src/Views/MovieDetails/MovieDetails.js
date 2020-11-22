import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form, Accordion } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie, createProductReview, getReviews } from '../../actions/moviesAction'
import { MOVIE_CREATE_REVIEW_RESET } from '../../constants/movieConstants'


import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';

import Rating from '../../Components/Rating/Rating'
import Navbar from '../../Components/Template/Nav/Nav'
import './MovieDetails.css'
import Footer from '../../Components/Template/Footer/Footer';

const MovieDetails = ({ history, match }) => {

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const id = match.params.id
    const [language, setLanguage] = useState()
    const findShowHandler = () => {
        
        if(language === undefined || language === 'select language')
            alert("Select a language");
        else
            history.push(`/showbylang?movie_id=${id}&language=${language}`)
    }  

    const movieDetail = useSelector(state => state.movieDetail)
    const { loading, error, movie } = movieDetail

    const movieCreateReview = useSelector(state => state.movieCreateReview)
    const { loading: reviewLoading, success: reviewSuccess ,error: reviewError } = movieCreateReview

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const movieGetReview = useSelector(state => state.moviegetReview)
    const { reviews } = movieGetReview

    const dispatch = useDispatch()
    useEffect(() => {
        if(reviewSuccess){
            alert('Review Submitted')
            setRating(0)
            setComment('')
            dispatch({ type: MOVIE_CREATE_REVIEW_RESET })
        }
        dispatch(detailMovie(id))
        dispatch(getReviews(id))
    }, [dispatch, id, reviewSuccess])

    const submitHandler = (e) => {
        e.preventDefault()
        if(rating === 0){
            alert('Provide a rating')
        }else{
            dispatch( createProductReview( id, rating, comment ) )
        }
    }

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
                                <Rating id={id} reducer_id={0} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Description : </h5>
                                <strong> {desc} </strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Genres: </h5>
                                { genres && genres.map((genre, key) => (<strong key={key}> {genre} </strong>)) }
                                {/* <Accordion defaultActiveKey="0">    
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <h5>Genres</h5>
                                    </Accordion.Toggle>
                                    
                                    { genres && genres.map((genre, key) => (
                                        <Accordion.Collapse eventKey="1">
                                            <h6> {genre} </h6>
                                        </Accordion.Collapse>
                                    )) }
                                </Accordion> */}
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
                                            <h5 style={{padding: '10px'}}>Language: </h5>
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
                        
                        <div style={{marginTop: '50px'}}></div>
                        <Card>
                        <ListGroup variant='flush'>
                            <Card.Header className='my-2'>
                                <h4>Write a Movie Review</h4>
                            </Card.Header>

                            {reviewSuccess && (
                                <Message variant='success'>
                                  Review submitted successfully
                                </Message>
                            )}
                            {reviewLoading && <Loader />}
                            {reviewError && (
                              <Message variant='danger'>{reviewError}</Message>
                            )}
                            
                            { userInfo? ( 
                                <>
                                    <ListGroup variant='flush'>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    <h5 style={{padding: '10px'}}>Rating: </h5>
                                                </Col>

                                                <Col xs={7}>
                                                    <Form.Control
                                                       as='select'
                                                       value={rating}
                                                       onChange={(e) => setRating(e.target.value)}
                                                    >
                                                       <option value=''>Select...</option>
                                                       <option value='1'>1 - Poor</option>
                                                       <option value='2'>2 - Fair</option>
                                                       <option value='3'>3 - Good</option>
                                                       <option value='4'>4 - Very Good</option>
                                                       <option value='5'>5 - Excellent</option>
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    <h5 style={{padding: '10px'}}>Comment: </h5>
                                                </Col>

                                                <Col xs={7}>
                                                    <Form.Control
                                                       as='textarea'
                                                       row='1'
                                                       value={comment}
                                                       onChange={(e) => setComment(e.target.value)}
                                                    ></Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Button onClick={submitHandler} type='button' disabled={reviewLoading} >Submit</Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </>
                            ) : <Message>Please <Link to='/login'>Sign In</Link> to write a review</Message> }
                            
                        </ListGroup>
                        </Card>
                        <div style={{marginTop: '50px'}}></div>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className='my-1 py-1'>
                                        <h4>Click to view the Reviews</h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                

                                {reviews && reviews.map((review, key) => (
                                        <Accordion.Collapse key={key} eventKey="1">
                                            <Card.Body> <h5>{review.rating} start</h5> <strong style={{fontWeight: "bold", fontSize: '16px'}}>Comment: </strong> {review.comment} </Card.Body>
                                        </Accordion.Collapse>
                                ))}
                                
                            </Card>
                        </Accordion>
                        
                    </Col>
                </Row> 
            </>
        )
    }
}

export default MovieDetails
