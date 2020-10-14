const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.post("/", async (req, res) => {
  try {
    // Take details from request
    const name = req.body.user_details['name'];
    const phone_number = req.body.user_details['phone_number'];
    const email = req.body.user_details['email'];

    // Find phone number in employee details DB
    const employee = await Employee.findOne({
      $or: [{ name: name }, { phone_number: phone_number }, { email: email }],
    });

    if (employee != null) {
      return res.json({ is_Auth: "true" });
    }

    return res.json({ is_Auth: "false" });
    
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
