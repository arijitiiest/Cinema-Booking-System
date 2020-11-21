const jwt = require("jsonwebtoken");

const Seats = require("../../models/Seats");
const SeatStatus = require("../../models/SeatStatus");

const sequelize = require("../../db");
const { Transaction } = require("sequelize");

const sleep = (waitTimeInMs) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

exports.getSeats = (req, res, next) => {
  const screen = req.query.screen;
  const date = req.query.date;
  const showtime = req.query.showtime;
  const movie_id = req.query.movie_id;

  if (!screen && !date && !showtime) {
    Seats.findAll()
      .then((seats) => {
        if (!seats) throw new Error("No seats");
        res.status(200).json(seats);
      })
      .catch((err) => {
        // console.log(err);
        res.status(401).json({ status: 401, message: "Somethong went wrong" });
      });
  } else {
    Seats.findAll({
      where: { screen },
      include: [
        {
          model: SeatStatus,
          where: { date, showtime, movie_id },
          required: false,
        },
      ],
    })
      .then((seats) => {
        if (!seats) throw new Error("No seats");
        res.status(200).json(seats);
      })
      .catch((err) => {
        // console.log(err);
        res.status(401).json({ status: 401, message: "Somethong went wrong" });
      });
  }
};

exports.postSeat = (req, res, next) => {
  const row_no = req.body.row_no;
  const col_no = req.body.col_no;
  const screen = req.body.screen;
  const price = req.body.price;

  Seats.create({ row_no, col_no, screen, price })
    .then((create) => {
      if (!create) throw new Error("Not created");
      res.status(201).json({ status: 201, message: "Seat created" });
    })
    .catch((err) => {
      // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};

exports.deleteSeat = (req, res, next) => {
  const seatId = req.params.id;
  Seats.destroy({ where: { id: seatId } })
    .then((r) => {
      res.status(202).json({ status: 201, message: "Show deleted" });
    })
    .catch((err) => {
      // console.log(err);
      res.status(401).json({ status: 401, message: "Somethong went wrong" });
    });
};

// exports.getSeatStatus = (req, res, next) => {};

exports.postSeatStatus = (req, res, next) => {
  const seatId = req.body.seat_id;
  const date = req.body.date;
  const showtime = req.body.showtime;
  const status = req.body.status;
  const movie_id = req.body.movie_id;

  console.log(seatId, date, showtime, status, movie_id);

  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  console.log(decoded)

  sequelize
    .transaction({ isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE })
    .then((t) => {
      SeatStatus.findAll({
        where: { date, showtime, status, seatId, movie_id },
        lock: true,
        transaction: t,
      })
        .then((seat) => {
          if (seat.length != 0) {
            console.log(seat)
            res.status(401).json({ status: 401, message: "Already booked" });
            return;
          } else {
            Seats.findByPk(seatId, { transaction: t })
              // .then(async (seat) => {
              //   await sleep(10000);
              //   return seat;
              // })
              .then((seat) => {
                if (!seat) throw new Error("Seat not found");
                // console.log(seat);
                return seat
                  .createSeatstatus(
                    { date, showtime, status, user_id: decoded, movie_id },
                    { transaction: t }
                  )
                  .then(async (result) => {
                    await t.commit();
                    return result;
                  })
                  .then((result) => {
                    res.status(201).json({ status: 201, ...result.dataValues });
                  })
                  .catch((err) => {
                    throw err;
                  });
              })
              .catch((err) => {
                // console.log(err);
                t.rollback();
                res.status(401).json({
                  status: 401,
                  message: "Somethong went wrong, maybe already booked",
                });
              });
          }
        })
        .catch((err) => {
          // console.log(err);
          t.rollback();
          res.status(401).json({
            status: 401,
            message: "Somethong went wrong, maybe already booked",
          });
        });
    });

  // SeatStatus.findAll({ where: { date, showtime, status, seatId } }).then(
  //   (seat) => {
  //     if (seat.length != 0) {
  //       res.status(401).json({ status: 401, message: "Already booked" });
  //       return;
  //     } else {
  //       Seats.findByPk(seatId)
  //         .then((seat) => {
  //           if (!seat) throw new Error("Seat not found");
  //           // console.log(seat);
  //           return seat
  //             .createSeatstatus({ date, showtime, status })
  //             .then((result) => {
  //               res.status(201).json({ status: 201, ...result.dataValues });
  //             })
  //             .catch((err) => {
  //               throw err;
  //             });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           res
  //             .status(401)
  //             .json({ status: 401, message: "Somethong went wrong" });
  //         });
  //     }
  //   }
  // );
};

exports.getNoOfEmptySeats = async (req, res, next) => {
  const screen = req.query.screen;
  const date = req.query.date;
  const showtime = req.query.showtime;

  if (!screen && !date && !showtime) {
    res
      .status(401)
      .json({ status: 401, message: "Include screen date showtime" });
  } else {
    Seats.count({ where: { screen } })
      .then((total) => {
        Seats.count({
          where: { screen },
          include: [
            {
              model: SeatStatus,
              where: { date, showtime },
              required: true,
            },
          ],
        })
          .then((seats) => {
            if (!seats) throw new Error("No seats");
            res.status(200).json(total - seats);
          })
          .catch((err) => {
            // console.log(err);
            res
              .status(401)
              .json({ status: 401, message: "Somethong went wrong" });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({ status: 401, message: "Screen not found" });
      });
  }
};
