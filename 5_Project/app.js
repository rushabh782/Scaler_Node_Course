const express = require("express"); //importing express
const mongoose = require("mongoose"); //import mongoose
const categories = require("./Routes/categories");
const students = require("./Routes/students");
const app = express();

//Connecting with MongoDb Database
mongoose
  .connect("mongodb://127.0.0.1/learningPlatform")
  .then(() => console.log("Connection is successfull"))
  .catch((err) => console.error("Couldnt connect to MongoDB", err));

app.use(express.json()); //used for parsing
app.use("/api/categories", categories); //used to mount middlewares in the app
app.use("/api/students", students);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}...`));
