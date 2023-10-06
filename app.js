// Import required modules
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require('dotenv').config()
//Create instance of express app
const app = express();

// Import Express Routes
const basicRoutes = require("./routes/basicRoutes");
// Authentication Routes
const authRoutes = require("./routes/authRoutes");
// Admin Account Routes
const adminRoutes = require("./routes/adminRoutes");
// User Account Routes
const userRoutes = require("./routes/userRoutes");

// Connect MongoDB
// After Mongo Connection is successful, start listening on open port.
const dbURI = process.env.MONGODB
  // process.env.NODE_ENV === "production"
  //   ? "mongodb+srv://timmyisanerd:TheTitan1123@themoonhouse.miu4r.mongodb.net/tmh"
  //   : "mongodb+srv://sololo:Harley4058@cluster1.do5hnis.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`The Moon House App listening on port ${port}`)
    )
  )
  .catch((err) => console.log(err));

// Set port to 4000
const port = process.env.PORT || 4000;

// Register view engine
app.set("view engine", "ejs");

// Middleware and Static files
app.use(morgan("dev"));
app.use(express.static("public"));
// Middleware to decode incoming body
app.use(bodyParser.json());
// Cookie Parser
app.use(cookieParser());

// Use Express Routes
app.use(basicRoutes);
// Health check route
app.get("/health",(req,res) =>{
  res.status(200)
})
app.use(authRoutes);
app.use("/admin", adminRoutes);
app.use(userRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).render("404");
});
