const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/api");
const mongoose = require("mongoose");

// mongo connection
mongoose
  .connect(
    "mongodb://localhost:27017/ninjago",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB", err));

// express app setup
const app = express();
const PORT = process.env.PORT || 4000;

// express middleware
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Servert started on port", PORT);
});
