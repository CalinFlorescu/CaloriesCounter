const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

module.exports = () => {
  dotenv.config();

  const url = process.env.MONGO_URL;
  const port = process.env.PORT;

  mongoose.connect(`${url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const app = express();

  app.use(express.json());

  app.use(cors());

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  return app;
};
