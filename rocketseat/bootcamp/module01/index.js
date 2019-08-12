const express = require("express");

const server = express();

server.use(express.json());

// get route returning message
server.get("/text", (req, res) => {
  return res.send("Hello, World!");
});

// get route returning json
server.get("/json", (req, res) => {
  return res.json({ message: "Hello, World!" });
});

// get route with query params
server.get("/name", (req, res) => {
  const { name } = req.query;

  return res.json(`message: Hello, ${name}`);
});

// get route with route params
server.get("/user/:id", (req, res) => {
  const { id } = req.params;

  return res.json({ message: `Searching for user ${id}` });
});

const users = ["Diego", "Claudio", "Victor"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json({ user: `${users[index]}` });
});

server.listen("3333");
