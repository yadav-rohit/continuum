const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  walletID: {
    type: String,
    required: true,
  },
  transactionhash: {
    type: String,
    required: true,
  },
  transactionto: {
    type: String,
    required: true,
  },
  transactionammount: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
});
const user = mongoose.model("user", UserSchema);
//   user.createIndexes();
module.exports = user;
