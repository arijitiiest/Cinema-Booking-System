const express = require("express");

const authController = require("../controller/auth/authController");

const router = express.Router();

router.post("/login", authController.postLogin);

router.post("/register", authController.postRegister);

router.get("/profile", authController.getProfile);

router.post("/admin-login", authController.postAdminLogin);

router.post("/admin-register", authController.postAdminRegister);

module.exports = router;
