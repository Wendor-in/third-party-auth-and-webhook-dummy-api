const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.post("/", async (req, res) => {
  try {
    // Take details from request
    const EID = req.body.employee_id;
    const phone_number = req.body.phone_number;
    const email_add = req.body.email;

    // Find phone number in employee details DB
    const employee = await Employee.findOne({
      $or: [{ employee_id: EID }, { phone_number: phone_number }, { email: email_add }],
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
