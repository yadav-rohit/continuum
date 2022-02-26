const express = require("express");
const { body, validationResult } = require("express-validator");
const Causes = require("../models/Causes");
const router = express.Router();

//  ?Route1 to get all Causes . GET"/api/Causes/fetchallCauses" 
router.get("/fetchallcauses", async (req, res) => {
  try {
    const causes = await Causes.find();
    res.json(causes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

// ?Route 2 add addnote . POST "/api/Causes/addcause"  
router.post(
  "/addcause",
  [
    body("title", "Enter valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 4 characters").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    try {
      const { contractId , title, description, Image , target } = req.body;
      // !if any error then send it
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const cause = new Causes({
        contractId,
        title,
        description,
        Image,
        target,
      });
      const savedCause = await cause.save();
      // ?returns saved note
      res.json(savedCause);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);




module.exports = router;
