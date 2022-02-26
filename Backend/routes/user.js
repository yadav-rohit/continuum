const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// var fetchUser = require('../middleware/fetchUser');
// const JWT_SECRET = 'ROhit is programmer';
//route 1
//?create user and transaction history using: Post "/api/user/addtransaction" . 
router.post(
  "/addtransaction",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("walletId").isLength({ min: 10 }),
    body("transactionhash").isLength({ min: 10 }),
    body("transactionto").isLength({ min: 5 }),
    body("transactionammount").isInt(),
  ],
  async (req, res) => {
    let success = false;
    //on Errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check if there already exsists the user with email
    try {
      let user = await User.findOne({ email: req.body.email });

      user = await User.create({
        name: req.body.name,
        walletID: req.body.walletId,
        transactionhash: req.body.transactionhash,
        transactionto: req.body.transactionto,
        transactionammount: req.body.transactionammount,
      });
       const data = {
         user:{
           ammount: user.transactionammount,
           transactionHash: user.transactionhash,
           transactionTo: user.transactionto
         }
       }
  
      //we provide a token to user 
      res.json({success , data});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);
//route 2
//? Getting Top Donnors using "/api/user/fetchtopdonnors" . 
router.get("/fetchdonnors", async(req , res) => {
  let success = false;
  try {
    const transactions = await User.find(); 
    var sum = 0 ;
    await transactions.forEach(element => {
      sum = (parseInt(sum) + parseInt(element.transactionammount)); 
    });
    const avg = (sum / transactions.length) ;
    res.send({transactions , avg});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
  
}
      
);

// //Route 3: Retrieving logined user info "/api/auth/getuser". login required
// router.post("/getuser",  fetchUser ,  async(req , res) => {
// try {
//   userID = req.user.id
//   const user = await User.findById(userID).select("-password")
//   res.send(user);
// } catch (error) {
//   console.error(error.message);
//       res.status(500).send("internal server error");
// }
// })
module.exports = router;
