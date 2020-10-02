const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  employee_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("employees", EmployeeSchema);
