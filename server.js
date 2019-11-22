const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Db config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB.."))
  .catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
