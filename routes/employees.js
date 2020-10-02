const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.post("/", async (req, res) => {
  try {
    const EID = req.body.employee_id;
    const phone_no = req.body.phone_no;
    const email_add = req.body.email;

    // Fetch Employee Details
    const employee = await Employee.findOne({
      $or: [{ employee_id: EID }, { phone_no: phone_no }, { email: email_add }],
    });
    if (employee != null) {
      res.json({ is_Auth: "true" });
    }

    res.json({ is_Auth: "false" });
  } catch (err) {
    res.json({ message: err });
  }
  res.end();
});

module.exports = router;
