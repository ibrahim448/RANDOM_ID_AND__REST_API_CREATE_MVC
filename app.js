const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRouter")

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoute);



module.exports = app;