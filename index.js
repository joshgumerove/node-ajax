const express = require("express");
// instantiate application instance
const app = express();
const authenticate = require("./authenticate");

app.listen(3012, () => {
  console.log("now listening port 3002");
});

app.get("/", (req, res) => {
  //   res.statusCode = 200;
  res.send("Node is working");
});

app.get("/error", (req, res) => {
  // if redirected
  res.send("you have a mistake!");
});

// middleware
app.use(authenticate);

// secret file API

app.get("/secret", (req, res) => {
  //   res.statusCode = 200;
  res.send("secret message");
});
