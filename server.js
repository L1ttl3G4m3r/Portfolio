require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
