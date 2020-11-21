import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const ShowbyMovie = ({ show }) => {

  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Body>
          <Card.Text as="div">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>
                  {" "}
                  SHOWTIME : {show.showtime}, on {show.date}{" "}
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5> LANGUAGE : {show.language} </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  {" "}
                  CINEMA SCREEN : {show.screen} in {show.movie.format} format{" "}
                </h5>
              </ListGroup.Item>
            </ListGroup>
            <Link
              to={{ pathname: "/seatarrangement", aboutProps: { show } }}
              className="btn btn-dark my-3"
            >
              Book Ticket
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShowbyMovie;
