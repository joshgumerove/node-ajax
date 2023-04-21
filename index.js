const http = require("http");
const express = require("express");

// instantiate application instance
const app = express();

// setup server
const server = http.createServer(app);

server.listen(3005, "localhost", () => {
  console.log("now listening on the correct port");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
