const express = require('express');
const app = express();
require('dotenv').config();

const connectToDB = require('./db/connect');
const userRoutes = require('./routes/authRoutes');

// ------------------------------------------------------
app.use(express.json());
app.use('/', userRoutes);

// ------------------------------------------------------
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectToDB(process.env.DB_URL);
    console.log("We're connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log('Connection error!!!');
  }
};

start();
