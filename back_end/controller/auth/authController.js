const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");
const Admin = require("../../models/admin");
const SeatStatus = require("../../models/SeatStatus");
const Movies = require("../../models/movies");
const Seats = require("../../models/Seats");

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      const err = new Error("Email doesnot exist");
      err.status = 404;
      throw err;
    }

    if (bcrypt.compareSync(password, user.dataValues.password)) {
      const token = jwt.sign(user.dataValues.id, process.env.SECRET_KEY);
      res.status(200).json({
        status: 200,
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: token,
        message: "Login successful",
      });
    } else {
      const err = new Error("Password incorrect");
      err.status = 401;
      throw err;
    }
  } catch (err) {
    // console.log(err);
    res.status(err.status).json({ status: err.status, message: err.message });
  }
};

exports.postRegister = async (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const err = new Error("Email already exist");
      err.status = 409;
      throw err;
    }

    const hash = await bcrypt.hash(password, 10);
    const create = await User.create({
      first_name,
      last_name,
      email,
      password: hash,
    });

    if (!create) {
      const err = new Error("Something went wrong");
      err.status = 500;
      throw err;
    }

    res.status(201).json({ status: 201, message: "User created" });
  } catch (err) {
    // console.log(err);
    res.status(err.status).json({ status: err.status, message: err.message });
  }
};

exports.postAdminLogin = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Admin.findOne({ where: { username } });

    // console.log(user);

    if (!user) {
      const err = new Error("Admin doesnot exist");
      err.status = 404;
      throw err;
    }

    if (bcrypt.compareSync(password, user.dataValues.password)) {
      const token = jwt.sign(user.dataValues.id, process.env.SECRET_KEY);
      // console.log(token);
      res.status(200).json({ token: token, username });
    } else {
      const err = new Error("Password incorrect");
      err.status = 401;
      throw err;
    }
  } catch (err) {
    console.log(err);
    res.status(err.status).json({ status: err.status, message: err.message });
  }
};

exports.postAdminRegister = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);

  try {
    const user = await Admin.findOne({ where: { username } });

    if (user) {
      const err = new Error("Username already exist");
      err.status = 409;
      throw err;
    }

    const hash = await bcrypt.hash(password, 10);
    const create = await Admin.create({
      username,
      password: hash,
    });

    if (!create) {
      const err = new Error("Something went wrong");
      err.status = 500;
      throw err;
    }

    res.status(201).json({ status: 201, message: "Admin created" });
  } catch (err) {
    // console.log(err);
    res.status(err.status).json({ status: err.status, message: err.message });
  }
};

exports.getProfile = async (req, res, next) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  try {
    const user = await User.findByPk(decoded);

    const bookings = await SeatStatus.findAll({ where: { user_id: decoded }, include: [Movies, Seats] });

    res.status(200).json({ user, bookings });
  } catch (err) {
    console.log(err);
  }
};
