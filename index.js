const express = require("express");
// instantiate application instance
const app = express();
const authenticate = require("./authenticate");
const { nextTick } = require("process");

app.listen(3002, () => {
  console.log("now listening port 3002");
});

app.get("/", (req, res) => {
  //   res.statusCode = 200;
  res.send("Node is working");
});

app.get("/error", (req, res) => {
  // if redirected
  res.send("you have a mistake!");
  next(err);
});

// middleware
app.use(authenticate);

// secret file API

app.get("/secret", (req, res) => {
  //   res.statusCode = 200;
  res.send("secret message");
});
