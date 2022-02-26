const connectToMongo = require("./db");
var cors = require('cors');
require('dotenv').config();

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Available Routes to acess various Api
//? Route 1 for user an transactions
app.use("/api/user", require("./routes/user"));
//? Route 2 for Causes
app.use("/api/causes", require("./routes/causes"));

app.listen(port, () => {
  console.log(`Helper Backend Is Ready at Port: ${port}`);
});
