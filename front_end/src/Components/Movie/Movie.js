// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Movie.css'
import axios from 'axios'
import Rating from '../Rating/Rating'


const Movie = ({ movie }) => {

    const [rating, setRating] = useState([{}]);
    useEffect(() => {
        const fetchRating = async () => {
            const { data } = await axios.get(`/api/review-data?movie_id=${movie.id}`);
            setRating(data);
        }

        fetchRating()
    }, [movie.id]) 
    const {avg_rating, count_rating} = rating[0]
    const count = parseInt(count_rating)
    return (
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
                    <Rating avg_rating={avg_rating} count={count} />
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Movie

