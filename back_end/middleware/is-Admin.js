const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");

module.exports = (req, res, next) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findByPk(decoded)
    .then((admin) => {
      next();
    })
    .catch((err) => {
      res.redirect("/auth/admin-login");
    });
};
