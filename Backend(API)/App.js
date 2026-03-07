require("dotenv").config(); // Load env variables

const express = require("express");
const cors = require("cors");

const connectDB = require("./Connection");

const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());

/* Database */
connectDB();

/* Test Route */
app.get("/", (req, res) => {
    res.status(200).send("Server running successfully");
});

/* Routes */
const UserRoute = require("../Route/UserRoute");
app.use("/UserRoute", UserRoute);

/* Server */
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import authRoutes from "../Routes/Authroutes.js";

app.use("/api",authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");});