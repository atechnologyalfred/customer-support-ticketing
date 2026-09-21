require("dotenv").config();
const express = require("express")
const connectDB = require("./config/database");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Customer Support Ticketing API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});