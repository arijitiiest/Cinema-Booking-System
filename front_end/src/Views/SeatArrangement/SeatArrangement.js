import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import { ConfirmationNumber, Theaters } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SeatArrangement = () => {
  const [open, setOpen] = React.useState(true);
  const [noOfSeats, setNoOfSeats] = React.useState(2);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSelectSeatsDialog = React.useCallback((val) => {
    console.log(val);
    setNoOfSeats(val);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
    
        



      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">How many Seats?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Choose how many seats you want to book. you can change it later!!!
          </DialogContentText>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Theaters style={{ fontSize: "100" }} color="action" />
          </div>
          {/* </DialogContent> */}
          <div>
            <Button onClick={() => handleSelectSeatsDialog(1)}>1</Button>
            <Button onClick={() => handleSelectSeatsDialog(2)}>2</Button>
            <Button onClick={() => handleSelectSeatsDialog(3)}>3</Button>
            <Button onClick={() => handleSelectSeatsDialog(4)}>4</Button>
            <Button onClick={() => handleSelectSeatsDialog(5)}>5</Button>
            <Button onClick={() => handleSelectSeatsDialog(6)}>6</Button>
            <Button onClick={() => handleSelectSeatsDialog(7)}>7</Button>
            <Button onClick={() => handleSelectSeatsDialog(8)}>8</Button>
          </div>
          {/* <DialogContent> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <div style={{ fontFamily: "monospace", fontSize: "12" }}>
                DIAMOND
              </div>
              <div style={{ fontFamily: "roboto-bold", fontWeight: "bold" }}>
                Rs. 89.00
              </div>
              <div style={{ color: "green" }}>Available</div>
            </div>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: "12" }}>
                GOLD
              </div>
              <div style={{ fontFamily: "roboto-bold", fontWeight: "bold" }}>
                {" "}
                Rs. 89.00
              </div>
              <div style={{ color: "green" }}>Available</div>
            </div>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: "12" }}>
                SILVER
              </div>
              <div style={{ fontFamily: "roboto-bold" }}>Rs. 89.00</div>
              <div style={{ color: "green" }}>Available</div>
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button color="primary" variant="contained" onClick={handleClose}>
            Select Seats
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SeatArrangement;
