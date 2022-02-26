const mongoose = require("mongoose");
require('dotenv').config();

//Make sure to make an .env file to store you db link
const mongoURI =
process.env.DB_LINK;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};

module.exports = connectToMongo;
