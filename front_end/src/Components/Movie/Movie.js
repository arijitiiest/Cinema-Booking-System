import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Movie.css'
import Rating from '../Rating/Rating'


const Movie = ({ movie }) => {

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
                        <Rating id={movie.id}/>
                    </Card.Text>
            
                </Card.Body>
            </Card>
        </>
    )
}

export default Movie

