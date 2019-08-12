const express = require("express");
const server = express();

server.use(express.json());

const users = ["Diego", "Claudio", "Victor"];

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

// CRUD routes using the users list:

server.get("/users", (req, res) => {
  return res.json({ users });
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json({ user: `${users[index]}` });
});

server.post("/users", (req, res) => {
  const { username } = req.body;
  users.push(username);
  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { username } = req.body;
  users[index] = username;
  return res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
});

server.listen("3333");
