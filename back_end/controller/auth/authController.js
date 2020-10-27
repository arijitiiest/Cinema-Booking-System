const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

process.env.SECRET_KEY = "Arijit_very_secure";

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
      const token = jwt.sign(user.dataValues.user_id, process.env.SECRET_KEY);
      res
        .status(200)
        .json({ status: 200, token: token, message: "Login successful" });
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

// const db = require("../db");

// process.env.SECRET_KEY = "Arijit_very_secure";

// exports.getLogin = (req, res, next) => {};

// exports.getRegister = (req, res, next) => {};

// exports.postLogin = async (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   try {
//     const user = await db.query("SELECT * FROM public.user WHERE email = $1", [
//       email,
//     ]);

//     if (user.rowCount == 0) {
//       res.status(404).json({status: 404, message: "Email doesnot exist"})
//     }

//     if (bcrypt.compareSync(password, user.rows[0].password)) {
//       const token = jwt.sign(user.rows[0].user_id, process.env.SECRET_KEY);
//       res.status(200).json({status: 200, token: token, message: "Login successful"})
//     } else {
//       res.status(401).json({status: 401, message: "Password incorrect"})
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({status: 500, message: "Some error occurred"});
//   }
// };

// exports.postRegister = async (req, res, next) => {
//   const first_name = req.body.first_name;
//   const last_name = req.body.last_name;
//   const email = req.body.email;
//   const password = req.body.password;

//   try {
//     const user = await db.query("SELECT * FROM public.user WHERE email = $1", [
//       email,
//     ]);

//     if (user.rowCount != 0) {
//       res.status(409).json({ status: 409, message: "email already exist" });
//     }
//     const hash = await bcrypt.hash(password, 10);

//     const create = await db.query(
//       "INSERT INTO public.user(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
//       [first_name, last_name, email, hash]
//     );

//     res.status(201).json({ status: 201, message: "user created" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ status: 500,message: "Some error occurred" });
//   }
// };

// exports.postLogout = (req, res, next) => {};
