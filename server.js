// node and express server configuration

// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();



// Express configuration

var app = express();
var PORT = process.env.PORT || 3000;

// BodyParser configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router

app.use("/api",require("./routes/orderRoute.js"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server listening on port: ${3000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });


