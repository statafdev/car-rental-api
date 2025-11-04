const express = require("express");
const router = express.Router();

const { getAllCars, getCarById } = require("../controllers/carController");
const authenticateClient = require("../middleware/authenticateClient");

router.get("/", authenticateClient, getAllCars);
router.get("/:id", getCarById);

module.exports = router;
