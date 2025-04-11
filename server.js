require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

// Serve static files (CSS, images, etc.) from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Set up views and EJS engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index", { page: 'home' });
});

app.get("/interior", (req, res) => {
  res.render("interior", { page: 'interior' });
});

app.get("/design", (req, res) => {
  res.render("design", { page: 'design' });
});

app.get("/coding", (req, res) => {
  res.render("coding", { page: 'coding' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
