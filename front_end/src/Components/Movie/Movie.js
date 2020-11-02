// eslint-disable-next-line
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './Movie.css'

import Loader from '../Loader/Loader'
import Message from '../Message/Message'
import Rating from '../Rating/Rating'
import { ratingDetails } from '../../actions/ratingDetailsAction'


const Movie = ({ movie }) => {

    const dispatch = useDispatch()
    const id = movie.id
    useEffect(() => {
        dispatch(ratingDetails(id))
    }, [dispatch, id]) 

    const detailRating = useSelector(state => state.detailRating)
    const { loading, rating, error} = detailRating

    if( loading ) {
        return(
            <>
                <Card className='my-3 p-3 rounded'>
                    
                    <Card.Body>
                        <Loader/>
                    </Card.Body>
                </Card>
            </>
        )
    } else if(error) {
        return(
            <>
                <Message variant='danger'> {error} </Message>
            </>
        )
    } else {
        return(
            <>
                <Card className='my-3 p-3 rounded'>
                    <Link to={`/movie/${movie.id}`}>
                        <Card.Img src={movie.image_url} variant='top'/>
                    </Link>
                
                    <Card.Body>
                        <Link to={`/movie/${movie.id}`}>
                            <Card.Title as='div'>
                                <h4> {movie.title} </h4>
                            </Card.Title>
                        </Link>
                
                        <Card.Text as='div'>
                            <Rating avg_rating={ rating[0].avg_rating } count={ parseInt(rating[0].count_rating) } />
                        </Card.Text>
                
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Movie

