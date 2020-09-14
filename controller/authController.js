const db = require("../db");

exports.getLogin = (req, res, next) => {};

exports.getRegister = (req, res, next) => {};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const users = db.query("SELECT * FROM public.user", (err, result) => {
    console.log(result.rows);
  });
};

exports.postRegister = (req, res, next) => {};

exports.postLogout = (req, res, next) => {};
