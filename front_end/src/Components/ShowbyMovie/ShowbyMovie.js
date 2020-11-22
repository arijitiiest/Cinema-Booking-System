import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const ShowbyMovie = ({ show }) => {

  return (
    <>
      <Card className="my-3 p-3 rounded" style={{background: 'rgb(240,240,240)'}}>
        <Card.Body>
          <Card.Text as="div">
            <>
              <>
                <h5>
                  {" "}
                  SHOWTIME : {show.showtime}, on {show.date}{" "}
                </h5>
              </>
              <>
                <h5> LANGUAGE : {show.language} </h5>
              </>
              <>
                <h5>
                  {" "}
                  CINEMA SCREEN : {show.screen} in {show.movie.format} format{" "}
                </h5>
              </>
            </>
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
