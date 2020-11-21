import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSeats, removeSeat } from "../../actions/seatActions";
import "./SeatMatrix.css";

const Seat = (props) => {
  const dispatch = useDispatch();

  const seats = useSelector((state) => state.seatBooking.Seats);
  const noOfSeats = useSelector((state) => state.seatBooking.noOfSeat);

  const seatClickHandler = () => {
    const seatColor = document.querySelector(`.seat-${props.seat.id}`)
      .classList;
    if (seats.find((seat) => seat === props.seat)) {
      seatColor.remove("seat-black");
      seatColor.add("seat-gray");
      dispatch(removeSeat(props.seat.id));
    } else {
      if (seats.length !== noOfSeats) {
        seatColor.remove("seat-gray");
        seatColor.add("seat-black");
        dispatch(addSeats(props.seat));
      }
    }
  };

  return (
    <div
      onClick={seatClickHandler}
      className={`seat seat-${props.seat.id} seat-gray`}
    ></div>
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
