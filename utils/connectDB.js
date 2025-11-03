const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Get MongoDB URI from environment variables with fallback
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/JwtDb";

    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add retry logic for better reliability
      serverSelectionTimeoutMS: 5000,
    };

    // Connect to MongoDB
    await mongoose.connect(mongoURI, options);

    // Log successful connection
    console.log("📦 Connected to MongoDB database");

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("🔌 MongoDB disconnected");
    });

    // Handle application termination
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("MongoDB connection closed through app termination");
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    // Throw error instead of exiting - let the server handle it
    throw error;
  }
};

module.exports = connectDB;
