const express = require("express");
const server = express();

server.use(express.json());

const users = ["Diego", "Claudio", "Victor"];

// Example of global middleware
server.use((req, res, next) => {
  console.log("A requisição foi chamada!");
  return next();
});

// Another global middleware, with logs about the request
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Method: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

// local middleware to check if the body is sendind the username information
function checkUserExists(req, res, next) {
  if (!req.body.username) {
    return res.status(400).json({ error: "Username is required" });
  }

  return next();
}

// local middleware to see if there is an user in the array with that index
function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.status(400).json({ error: "User does not exist" });
  }

  return next();
}

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

server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  return res.json({ user: `${users[index]}` });
});

server.post("/users", checkUserExists, (req, res) => {
  const { username } = req.body;
  users.push(username);
  return res.json(users);
});

server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { username } = req.body;
  users[index] = username;
  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
});

server.listen("3333");
