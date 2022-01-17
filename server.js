require("dotenv").config;
const express = require("express"); //import express from the express module
const cors = require("cors");
const path = require ("path");

const contactRoute = require('./route/contactRoute')

const app = express(); //call the express function and put the new application in the app variable

app.use(express.json());
app.use(cors());


app.use("/", contactRoute);

const port = process.env.PORT || 5000;
app.listen(port, console.log('server listing to port 5000'));
