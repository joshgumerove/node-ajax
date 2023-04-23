const express = require("express");
// instantiate application instance
const app = express();

const authenticate = require("./authenticate");

app.listen(3002, () => {
  console.log("now listening port 3002");
});

app.use("/secret", authenticate);
app.use((err, req, res, next) => {
  console.log("here is your error stack: ", err.stack);
  res.statusCode = 401;
  res.end("oops now it is really game over");
});

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.end("Node is working");
});

// secret file API

app.get("/secret", (req, res) => {
  res.statusCode = 200;
  res.end("secret message");
});
