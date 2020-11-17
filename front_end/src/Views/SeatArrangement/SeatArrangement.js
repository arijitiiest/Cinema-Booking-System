import React from "react";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Theaters } from "@material-ui/icons";
import axios from "axios";

import SeatMatrix from "../../Components/SeatMatrix/SeatMatrix";
import { screen } from "../../assets";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#343A40",
  },
  appbarDatetime: {
    backgroundColor: "#F5F5FA",
    height: 40,
    flex: 1,
    justifyContent: "center",
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const SeatArrangement = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [noOfSeats, setNoOfSeats] = React.useState(2);
  const [movieDetails, setMovieDetails] = React.useState({
    title: "Joker",
    format: "3D",
    showtime: "9.00 pm",
    date: "2020-10-27",
    screen: "A",
  });
  const [seatMatrixData, setSeatMatrixData] = React.useState();

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/seats?screen=${movieDetails.screen}&date=${movieDetails.date}&showtime=${movieDetails.showtime}`
      )
      .then((res) => {
        setSeatMatrixData(res.data);
      });
  }, [movieDetails]);

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
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div>CHOLOCHITRO BHOBON</div>
            <div style={{ fontFamily: "monospace", fontSize: 12 }}>
              {movieDetails.title} {movieDetails.format.toUpperCase()}
            </div>
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            {noOfSeats} Tickets
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.appbarDatetime}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "monospace",
                fontSize: 14,
                color: "gray",
              }}
            >
              <div>
                {movieDetails.date} {movieDetails.showtime}
              </div>
              <div>Screen {movieDetails.screen}</div>
              <div style={{ width: "150px" }}></div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <div>All eyes this way please</div>
        <img
          src={screen}
          alt="screen"
          width="350px"
          height="10px"
          style={{ transform: "rotate(180deg)", opacity: "0.7" }}
        />
      </div>

      <SeatMatrix data={seatMatrixData} />

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
