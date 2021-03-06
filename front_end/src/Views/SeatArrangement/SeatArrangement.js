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
import { Redirect, useHistory } from "react-router-dom";

import SeatMatrix from "../../Components/SeatMatrix/SeatMatrix";
import { screen } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setNoOfSeats, setSeatBooking } from "../../actions/seatActions";

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

const SeatArrangement = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const seats = useSelector((state) => state.seatBooking.Seats);
  const noOfSeats = useSelector((state) => state.seatBooking.noOfSeat);
  const userLoggedIn = useSelector((state) => state.userLogin);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [movieDetails, setMovieDetails] = React.useState({
    title: "LOL",
    format: "3D",
    showtime: "9.00 pm",
    date: "2020-10-28",
    screen: "A",
  });
  const [seatMatrixData, setSeatMatrixData] = React.useState();

  React.useEffect(() => {
    if (props.location.aboutProps) {
      setMovieDetails({
        title: props.location.aboutProps.show.movie.title,
        format: props.location.aboutProps.show.movie.format,
        showtime: props.location.aboutProps.show.showtime,
        date: props.location.aboutProps.show.date,
        screen: props.location.aboutProps.show.screen,
      });
      dispatch(setSeatBooking(props.location.aboutProps.show));
    }
  }, [props.location.aboutProps, dispatch]);

  React.useEffect(() => {
    if (movieDetails.title !== "LOL")
      axios
        .get(
          `http://localhost:5000/api/seats?screen=${movieDetails.screen}&date=${movieDetails.date}&showtime=${movieDetails.showtime}&movie_id=${props.location.aboutProps.show.movieId}`
        )
        .then((res) => {
          setSeatMatrixData(res.data);
        });
  }, [movieDetails, props.location]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSelectSeatsDialog = (val) => {
    dispatch(setNoOfSeats(val));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!props.location.aboutProps ? <Redirect to="/" /> : null}
      <div style={{height: "900px"}}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <a href="/" style={{ textDecoration: "none", color: "#fff" }}>
                CHOLOCHITRO BHOBON
              </a>
              <div style={{ fontFamily: "monospace", fontSize: 12 }}>
                {movieDetails.title} {movieDetails.format.toUpperCase()}
              </div>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
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

        {seats.length === noOfSeats ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5rem",
            }}
          >
            <div style={{ width: "250px" }}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth={true}
                onClick={() => {
                  if (Object.keys(userLoggedIn).length === 0)
                    history.push({
                      pathname: "/login",
                      state: { SeatArrangement: true },
                    });
                  else history.push("/payment");
                }}
              >
                Pay{" "}
                {`${seats.reduce(
                  (accumulator, seat) =>
                    (accumulator.price || accumulator) + seat.price
                )}`}
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            How many Seats?
          </DialogTitle>
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
    </>
  );
};

export default SeatArrangement;
