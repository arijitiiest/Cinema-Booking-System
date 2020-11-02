import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Show = ({ show }) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <Link to={`/show/${show.id}`}>
                    <Card.Img src={`/media/show4.jpg`} variant='top' />
                </Link>
            
                <Card.Body>
                    <Link to={`/movie/${show.movie.id}`}>
                        <Card.Title as='div'>
                            <h4> {show.movie.title} </h4>
                        </Card.Title>
                    </Link>
            
                </Card.Body>
            </Card>
        </>
    )
}

export default Show
