require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connecting to MongoDB Atlas DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handling DB Connection Error's
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connection to Database Sucessful"));

// Importing Routes
const employeesRoutes = require("./routes/employees");
app.use("/employees", employeesRoutes);

// Starting Express Server
app.use(express.json());
app.listen(3000, () => console.log("Server Started"));
