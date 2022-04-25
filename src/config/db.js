const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.mongoURI;

const connect = () => {
  return mongoose.connect(
    mongoURI
  );
};

module.exports = connect;
