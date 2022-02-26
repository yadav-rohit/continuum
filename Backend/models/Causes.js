const mongoose = require('mongoose');
const { Schema } = mongoose;

const CauseSchema = new Schema({
    contractId:{
       type: String,
       required: true
    },
   title:{
       type: String,
       required: true
   },
   description:{
       type: String,
       required: true
   },
   Image:{
     type: String,
     required: true
   },
   target:{
       type: String,
       required: true
   },
   date:{
       type: Date,
       default: Date.now
   }
  });

  module.exports = mongoose.model('cause' , CauseSchema)