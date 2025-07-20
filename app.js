// Import required modules
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config()
//Create instance of express app
const app = express();

// Import Express Routes
import basicRoutes from "./routes/basicRoutes.js";
// Authentication Routes
import authRoutes from "./routes/authRoutes.js";
// Admin Account Routes
import adminRoutes from "./routes/adminRoutes.js";
// User Account Routes
import userRoutes from "./routes/userRoutes.js";

// Connect MongoDB
// After Mongo Connection is successful, start listening on open port.
const dbURI = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Prism Bridge Capital App listening on port ${port}`)
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
app.get("/health", (req, res) => {
  res.status(200);
});
app.use(authRoutes);
app.use("/admin", adminRoutes);
app.use(userRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).render("404");
});
