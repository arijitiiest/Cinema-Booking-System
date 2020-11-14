import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ShowbyMovie = ({ history, show }) => {


    const onClickHandler = () => {
        
    }

    return (
        <>
            <Card className='my-3 p-3 rounded' >

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
                        <Link to='/login?redirect=seatarrangement'>
                            <Button className='btn btn-dark my-3' onClick={onClickHandler} >Book Ticket</Button>
                        </Link>
                    </Card.Text>
                    
                </Card.Body>      
            </Card>
        </>
    )
}

export default ShowbyMovie
