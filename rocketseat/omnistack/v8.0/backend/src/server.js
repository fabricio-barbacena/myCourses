const express = require("express");

const server = express();

server.get("/", (req, res) => {
  name = req.query.name;
  return res.send(`Hello, ${name}`);
});

server.listen("3333");
