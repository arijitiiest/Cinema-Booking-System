const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();
const app = express();

const sequelize = require("./db");

const User = require("./models/user");
const Movies = require("./models/movies");
const Reviews = require("./models/reviews");
const Shows = require("./models/shows");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.use("/media", express.static(__dirname + '/media'));
app.use(express.static(path.join(__dirname + "/../front_end/build")));
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../front_end/build/index.html"));
});

Reviews.belongsTo(Movies, { constraints: true, onDelete: "CASCADE" });
Movies.hasMany(Reviews);

Shows.belongsTo(Movies, { constraints: true, onDelete: "CASCADE" });
Movies.hasMany(Shows);

sequelize
  .sync({ force: true })
  .then((result) => {
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server started at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err);
  });
