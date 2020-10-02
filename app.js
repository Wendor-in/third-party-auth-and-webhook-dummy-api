require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// Connecting to MongoDB Atlas DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handling DB Connection Error's
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connection to Database Sucessful"));

// Parsing Json Data
app.use(express.json());

// Importing Routes
const employeesRoutes = require("./routes/employees");
app.use("/employees", employeesRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Your are on Home");
});

// Starting Express Server
app.listen(port, () => console.log("Server Started"));
