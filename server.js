const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Require Router Handlers
const tourists = require("./routes/api/tourists");
const tourGuides = require("./routes/api/tourGuides");

//Db config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB.."))
  .catch(error => console.log(error));

// Init middleware
app.use(express.json());

// Entry point
app.get("/", (req, res) => res.send(`<h1>EgyMate</h1>`));

// Direct to Route Handlers
app.use("/api/tourists", tourists);
app.use("/api/tourGuides", tourGuides);

app.use((req, res) =>
  res.status(404).send(`<h1>Can not find what you're looking for</h1>`)
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
