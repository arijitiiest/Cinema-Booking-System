import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Show = ({ show }) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <Link to={`/movie/${show.movie.id}`}>
                    <Card.Header as='div'>
                        <h3> {show.movie.title} </h3>
                    </Card.Header>
                </Link>
                <Link to={`/show/${show.id}`}>
                    <Card.Img src={`/media/show/${show.movie.image_url}`} variant='top' />
                </Link>
            
                <Card.Body>
                    
                    <Card.Text as='div'>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h5> SHOWTIME : { show.showtime }, on { show.date } </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> LANGUAGE : { show.language } </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> CINEMA SCREEN : { show.screen } in {show.movie.format} format </h5>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <Link className='btn btn-dark my-3' to='/' style={{width: '160px', height: 'auto', right: '0', position: 'relative' }} >Book Ticket</Link>
                </Card.Body>
                
                
            </Card>
        </>
    )
}

export default Show
