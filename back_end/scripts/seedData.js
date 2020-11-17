const sequelize = require("../db");
const bcrypt = require("bcrypt");

const Admin = require("../models/admin");
const Movies = require("../models/movies");
const Shows = require("../models/shows");
const Seats = require("../models/Seats");
const Reviews = require("../models/reviews");
const SeatStatus = require("../models/SeatStatus");

Reviews.belongsTo(Movies, { constraints: true, onDelete: "CASCADE" });
Movies.hasMany(Reviews);

Shows.belongsTo(Movies, { constraints: true, onDelete: "CASCADE" });
Movies.hasMany(Shows);

SeatStatus.belongsTo(Seats, { constraints: true, onDelete: "CASCADE" });
Seats.hasMany(SeatStatus);

sequelize
  .sync()
  .then(() => Admin.sync({ force: true }))
  .then(async () => {
    console.log("Admin synced");
  })
  .then(async () => {
    const username = "postgres",
      password = "password";
    const hash = await bcrypt.hash(password, 10);
    return Admin.create({
      username,
      password: hash,
    });
  })
  .then(async () => {
    console.log("Admin seeded");
  })
  .then(() => Movies.sync({ force: true }))
  .then(async () => {
    console.log("Movies synced");
  })
  .then(() =>
    Movies.bulkCreate([
      {
        title: "Joker",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "default.jpg",
      },
      {
        title: "Devi",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "devi.jpg",
      },
      {
        title: "Gupigayin",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "gupigayin.jpg",
      },
      {
        title: "Sonarkella",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "sonarkella.jpg",
      },
      {
        title: "Two Daughters",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "twodaughters.jpg",
      },
      {
        title: "Joybaba Felunath",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "joybaba.jpg",
      },
      {
        title: "Two Daughters",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "twodaughters.jpg",
      },
      {
        title: "Devi",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "devi.jpg",
      },
      {
        title: "Gupigayin Baghabain",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "gupigayin.jpg",
      },
      {
        title: "Sonarkella",
        desc: "Joker is a 2019 American psychological thriller film.",
        genres: ["comedy", "crime", "psychological thriller"],
        casts: [
          "Joaquin Phoenix",
          "Zazie Beetz",
          "Robert De Niro",
          "Frances Conroy",
        ],
        crews: [
          "Todd Phillips as Director, Producer",
          "Scott Silver as Writer",
          "Bradley Cooper as Producer",
        ],
        running_time: 122,
        format: "3D",
        languages: ["English", "Hindi"],
        age_level: 12,
        image_url: "sonarkella.jpg",
      },
    ])
  )
  .then(async () => {
    console.log("Movies seeded");
  })
  .then(() => Shows.sync({ force: true }))
  .then(async () => {
    console.log("Shows synced");
  })
  .then(() =>
    Shows.bulkCreate([
      {
        movieId: 1,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 2,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 3,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 1,
        showtime: "11.00 pm",
        screen: "B",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 4,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 5,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 6,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 7,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
      {
        movieId: 8,
        showtime: "9.00 pm",
        screen: "A",
        date: "2020-10-28",
        language: "English",
      },
    ])
  )
  .then(async () => {
    console.log("Shows seeded");
  })
  .then(() => Seats.sync({ force: true }))
  .then(async () => {
    console.log("Seats synced");
  })
  .then(() =>
    Seats.bulkCreate([
      {
        row_no: "A",
        col_no: "1",
        screen: "A",
        price: 100,
      },
      {
        row_no: "A",
        col_no: "2",
        screen: "A",
        price: 100,
      },
      {
        row_no: "A",
        col_no: "3",
        screen: "A",
        price: 100,
      },
      {
        row_no: "A",
        col_no: "4",
        screen: "A",
        price: 100,
      },
      {
        row_no: "A",
        col_no: "5",
        screen: "A",
        price: 100,
      },
      {
        row_no: "B",
        col_no: "1",
        screen: "A",
        price: 100,
      },
      {
        row_no: "B",
        col_no: "2",
        screen: "A",
        price: 100,
      },
      {
        row_no: "B",
        col_no: "3",
        screen: "A",
        price: 100,
      },
      {
        row_no: "B",
        col_no: "4",
        screen: "A",
        price: 100,
      },
      {
        row_no: "B",
        col_no: "5",
        screen: "A",
        price: 100,
      },
      {
        row_no: "C",
        col_no: "1",
        screen: "A",
        price: 100,
      },
      {
        row_no: "C",
        col_no: "2",
        screen: "A",
        price: 100,
      },
      {
        row_no: "C",
        col_no: "3",
        screen: "A",
        price: 100,
      },
      {
        row_no: "C",
        col_no: "4",
        screen: "A",
        price: 100,
      },
      {
        row_no: "C",
        col_no: "5",
        screen: "A",
        price: 100,
      },
      {
        row_no: "D",
        col_no: "1",
        screen: "A",
        price: 100,
      },
      {
        row_no: "D",
        col_no: "2",
        screen: "A",
        price: 100,
      },
      {
        row_no: "D",
        col_no: "3",
        screen: "A",
        price: 100,
      },
      {
        row_no: "D",
        col_no: "4",
        screen: "A",
        price: 100,
      },
      {
        row_no: "D",
        col_no: "5",
        screen: "A",
        price: 100,
      },
      {
        row_no: "E",
        col_no: "1",
        screen: "A",
        price: 100,
      },
      {
        row_no: "E",
        col_no: "2",
        screen: "A",
        price: 100,
      },
      {
        row_no: "E",
        col_no: "3",
        screen: "A",
        price: 100,
      },
      {
        row_no: "E",
        col_no: "4",
        screen: "A",
        price: 100,
      },
      {
        row_no: "E",
        col_no: "5",
        screen: "A",
        price: 100,
      },
    ])
  )
  .then(async () => {
    console.log("Seats seeded");
  })
  .then(() => SeatStatus.sync({ force: true }))
  .then(async () => {
    console.log("SeatStatus synced");
  })
  .then(() =>
    SeatStatus.bulkCreate([
      {
        date: "2020-10-27",
        showtime: "9.00 pm",
        status: "booked",
        seatId: 1,
      },
    ])
  )
  .then(async () => {
    console.log("SeatStatus seeded");
  })
  .then(() => {
    console.log("OK");
  })
  .catch((err) => console.log(err));
