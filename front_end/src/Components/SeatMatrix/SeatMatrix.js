import React from "react";
import "./SeatMatrix.css";

const Seat = (props) => {
  return <div className="seat"></div>;
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
        <div className="row">
          <div className="rowText">{key}</div>
          {seatMatrix[key].map((seat) => (
            <div className="column">
              <Seat seat={seat} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMatrix;
