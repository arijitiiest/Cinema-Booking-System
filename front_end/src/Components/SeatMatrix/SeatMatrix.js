import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Security } from "@material-ui/icons";

import { addSeats, removeSeat } from "../../actions/seatActions";
import "./SeatMatrix.css";

const Seat = (props) => {
  const dispatch = useDispatch();
  const [seatStatus, setSeatStatus] = React.useState("seat-blank");
  const movieId = useSelector((state) => state.seatBooking.booking.movie.id);

  const seats = useSelector((state) => state.seatBooking.Seats);
  const noOfSeats = useSelector((state) => state.seatBooking.noOfSeat);

  React.useEffect(() => {
    if (
      ((props.seat.row_no.charCodeAt() - 65) * 5 + props.seat.col_no) % 2 ===
      0
    ) {
      setSeatStatus("seat-covid");
    } else if (
      props.seat.seatstatuses.length > 0 &&
      props.seat.seatstatuses[0].status === "booked" &&
      props.seat.seatstatuses[0].movie_id === movieId
    ) {
      setSeatStatus("seat-undefined");
    } else {
      setSeatStatus("seat-blank");
    }
  }, [props.seat, movieId]);

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

  return seatStatus === "seat-covid" ? (
    <div className={`seat-covid seat-${props.seat.id}`}>
      <Security fontSize="small" style={{ color: "white" }} />
    </div>
  ) : (
    <div
      onClick={seatClickHandler}
      className={`seat seat-${props.seat.id} ${seatStatus}`}
    >
      {props.seat.row_no}
      {props.seat.col_no}
    </div>
  );
};

const SeatMatrix = (props) => {
  const { data } = props;
  const [seatMatrix, setSeatMatrix] = React.useState([]);
  const [seatMatrixKeys, setSeatMatrixKeys] = React.useState([]);

  React.useEffect(() => {
    let matrixObj = {};
    let sortedObj = {};
    if (data) {
      data.map((seat) => {
        if (!matrixObj[seat.row_no]) matrixObj[seat.row_no] = [];
        matrixObj[seat.row_no].push(seat);
        return null;
      });
    }

    Object.keys(matrixObj)
      .sort()
      .forEach(function (key) {
        sortedObj[key] = matrixObj[key].sort((a, b) => a.id - b.id);
      });

    setSeatMatrix(sortedObj);
    setSeatMatrixKeys(Object.keys(sortedObj));
    // console.log(sortedObj);
  }, [data]);

  return (
    <div className="seatMatrixContainer">
      {seatMatrixKeys.map((key) => (
        <div key={key} className="row">
          <div className={`rowText row-${key}`}>{key}</div>
          {seatMatrix[key].map((seat) => (
            <div key={seat.id} className={`column row-${key}`}>
              <Seat seat={seat} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMatrix;
