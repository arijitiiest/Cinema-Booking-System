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
        image_url: "/media/default.jpeg",
      },
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
        image_url: "/media/devi.jpg",
      },
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
        image_url: "/media/gupigayin.jpg",
      },
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
        image_url: "/media/sonarkella.jpg",
      },
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
        image_url: "/media/twodaughters.jpg",
      },
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
        image_url: "/media/gupigayin.jpg",
      },
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
        image_url: "/media/twodaughters.jpg",
      },
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
        image_url: "/media/devi1.jpg",
      },
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
        image_url: "/media/gupigayin.jpg",
      },
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
        image_url: "/media/sonarkella.jpg",
      },
    ])
  )
  .then(async () => {
    console.log("Movies seeded");
  })
  .then(() => Shows.sync({force: true}))
  .then(async () => {
    console.log("Shows synced");
  })
  .then(
    () =>
    Shows.bulkCreate([{
      movieId: 1,
      showtime: "9.00 pm",
      screen: "A",
      date: "2020-10-28",
      language: "English",
    }])
  )
  .then(async () => {
    console.log("Shows seeded");
  })
  //   .then(() => Seats.sync({ force: true }))
  //   .then(async () => {
  //     console.log("Seats synced");
  //   })
  //   .then(() => Seats.bulkCreate([{}]))
  //   .then(async () => {
  //     console.log("Seats seeded");
  //   })
  .then(() => {
    console.log("OK");
  })
  .catch((err) => console.log(err));
