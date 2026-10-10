const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const limiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    message: "HouseHunt API Running"
  });
});

app.use(errorHandler);

module.exports = app;