import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Movie.css'

const Movie = ({ movie }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/movie/${movie.id}`}>
                <Card.Img src={movie.image_url} variant='top' fluid />
            </Link>

            <Card.Body>
                <Link to={`/movie/${movie.id}`}>
                    <Card.Title as='div'>
                        <strong> {movie.title} </strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className='my-3'> {movie.desc} </div>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Movie

