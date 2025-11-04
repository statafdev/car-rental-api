const Car = require("../models/car");

exports.getAllCars = async (req, res) => {
  try {
    const { category, isAvailable, price } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (isAvailable) filter.isAvailable = isAvailable;
    if (price) filter.price = price;

    const cars = await Car.find(filter);
    res.json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({
        success: false,
        error: "Car not found",
      });
    }

    res.json({
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
