import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "./testing";

const app = express();

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
