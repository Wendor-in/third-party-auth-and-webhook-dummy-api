const express = require("express");
const app = express();
const mongoose = require("mongoose");
let port = process.env.PORT || 3000;
const DATABASE_URL =
  "mongodb+srv://admin:vivek-wendor@cluster0.9clex.mongodb.net/DB?retryWrites=true&w=majority";

// Connecting to MongoDB Atlas DB
mongoose.connect(DATABASE_URL, {
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
app.listen(port, () => console.log("Server Started"));
