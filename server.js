const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// Require Router Handlers
const users = require("./routes/api/users");

//Db config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to MongoDB.."))
  .catch(error => console.log(error));

// Init middleware
app.use(express.json());

// Entry point
app.get("/", (req, res) => res.send(`<h1>EgyMate</h1>`));

// Direct to Route Handlers
app.use("/api/users", users);

app.use((req, res) =>
  res.status(404).send(`<h1>Can not find what you're looking for</h1>`)
);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
