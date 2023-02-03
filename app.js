const serverless = require("serverless-http");
const express = require("express");
const app = express();

const carRouter = require("./src/routes/carRoute");

app.get("/", carRouter);

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
