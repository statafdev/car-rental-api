const express = require("express");
const router = express.Router();

const {
  clientRegister,
  clientLogin,
} = require("../controllers/authControllers.js");

router.post("/client/signup", clientRegister);
router.post("/client/login", clientLogin);

module.exports = router;
