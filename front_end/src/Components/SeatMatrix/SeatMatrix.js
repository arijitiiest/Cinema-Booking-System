import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSeats, removeSeat } from "../../actions/seatActions";
import "./SeatMatrix.css";

const Seat = (props) => {
  const dispatch = useDispatch();
  const [seatStatus, setSeatStatus] = React.useState("seat-blank");
  const movieId = useSelector(state => state.seatBooking.booking.movie.id)

  const seats = useSelector((state) => state.seatBooking.Seats);
  const noOfSeats = useSelector((state) => state.seatBooking.noOfSeat);

  React.useEffect(() => {
    if (
      props.seat.seatstatuses.length > 0 &&
      props.seat.seatstatuses[0].status === "booked"
      && props.seat.seatstatuses[0].movie_id === movieId
    ) {
      setSeatStatus("seat-undefined");
    } else {
      setSeatStatus("seat-blank");
    }
  }, [props.seat]);

  const seatClickHandler = () => {
    const seatColor = document.querySelector(`.seat-${props.seat.id}`)
      .classList;
    if (seats.find((seat) => seat === props.seat)) {
      seatColor.remove("seat-black");
      seatColor.add("seat-blank");
      dispatch(removeSeat(props.seat.id));
    } else {
      if (seats.length !== noOfSeats) {
        seatColor.remove("seat-blank");
        seatColor.add("seat-black");
        dispatch(addSeats(props.seat));
      }
    }
  };

  return (
    <div
      onClick={seatClickHandler}
      className={`seat seat-${props.seat.id} ${seatStatus}`}
    >
      {props.seat.row_no}{props.seat.col_no}
    </div>
  );
};

const SeatMatrix = (props) => {
  const { data } = props;
  const [seatMatrix, setSeatMatrix] = React.useState([]);
  const [seatMatrixKeys, setSeatMatrixKeys] = React.useState([]);

  React.useEffect(() => {
    let matrixObj = {};
    if (data) {
      data.map((seat) => {
        if (!matrixObj[seat.row_no]) matrixObj[seat.row_no] = [];
        matrixObj[seat.row_no].push(seat);
        return null;
      });
    }
    setSeatMatrix(matrixObj);
    setSeatMatrixKeys(Object.keys(matrixObj));
  }, [data]);

  return (
    <div className="seatMatrixContainer">
      {seatMatrixKeys.map((key) => (
        <div key={key} className="row">
          <div className="rowText">{key}</div>
          {seatMatrix[key].map((seat) => (
            <div key={seat.id} className="column">
              <Seat seat={seat} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMatrix;
