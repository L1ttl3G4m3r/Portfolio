require("dotenv").config();

const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const app = express();

// Serve static files (CSS, images, etc.) from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Set up views and EJS engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

let db;

// Connect to MongoDB
MongoClient.connect(uri)
  .then(client => {
    console.log("✅ Connected to MongoDB");
    db = client.db(dbName);
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.render("index", { page: 'home' });
});

app.get("/interior", async (req, res) => {
  try {
    const interiorPosts = await db.collection("Interior").find().sort({ _id: -1 }).toArray();
    console.log("Fetched posts from MongoDB:", interiorPosts);
    res.render("interior", { page: 'interior', posts: interiorPosts });
  } catch (err) {
    console.error("❌ Error fetching interior posts:", err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/design", async (req, res) => {
  try {
    const designPosts = await db.collection("Design").find().sort({ _id: -1 }).toArray();
    console.log("Fetched posts from MongoDB:", designPosts);
    res.render("design", { page: 'design', posts: designPosts });
  } catch (err) {
    console.error("❌ Error fetching interior posts:", err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/coding", async (req, res) => {
  try {
    const codingPosts = await db.collection("Coding").find().sort({ _id: -1 }).toArray();
    console.log("Fetched posts from MongoDB:", codingPosts);
    res.render("coding", { page: 'coding', posts: codingPosts });
  } catch (err) {
    console.error("❌ Error fetching interior posts:", err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
