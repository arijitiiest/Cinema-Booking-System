const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../db");

process.env.SECRET_KEY = "Arijit_very_secure";

// exports.getLogin = (req, res, next) => {};

// exports.getRegister = (req, res, next) => {};

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await db.query("SELECT * FROM public.user WHERE email = $1", [
      email,
    ]);

    if (user.rowCount == 0) {
      res.status(404).json({status: 404, message: "Email doesnot exist"})
    }

    if (bcrypt.compareSync(password, user.rows[0].password)) {
      const token = jwt.sign(user.rows[0].user_id, process.env.SECRET_KEY);
      res.status(200).json({status: 200, token: token, message: "Login successful"})
    } else {
      res.status(401).json({status: 401, message: "Password incorrect"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({status: 500, message: "Some error occurred"});
  }
};

exports.postRegister = async (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await db.query("SELECT * FROM public.user WHERE email = $1", [
      email,
    ]);

    if (user.rowCount != 0) {
      res.status(409).json({ status: 409, message: "email already exist" });
    }
    const hash = await bcrypt.hash(password, 10);

    const create = await db.query(
      "INSERT INTO public.user(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
      [first_name, last_name, email, hash]
    );

    res.status(201).json({ status: 201, message: "user created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500,message: "Some error occurred" });
  }
};

exports.postLogout = (req, res, next) => {};
