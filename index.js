const express = require("express");
// instantiate application instance
const app = express();
const authenticate = require("./authenticate");

app.listen(3005, () => {
  console.log("now listening port 3005");
});

app.get("/", (req, res) => {
  //   res.statusCode = 200;
  res.send("Node is working");
});

// middleware
app.use(authenticate);

// secret file API
app.get("/secret", (req, res) => {
  //   res.statusCode = 200;
  res.send("secret message");
});
