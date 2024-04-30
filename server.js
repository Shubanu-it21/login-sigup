const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./route/routes');

const app = express();
const PORT = 9992;

app.use(cors({
  origin: "http://localhost:4200"
}));

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/cor-reg")
  .then(() => {
    console.log("Successfully connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(routes);
