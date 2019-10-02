const express = require("express");

const routes = express.Router();

routes.get("/hello", (req, res) => {
  return res.json({ message: "Hello, World!" });
});

routes.get("/users", (req, res) => {
  return res.json({ user: req.query.user });
});

routes.get("/users/:id", (req, res) => {
  return res.json({ userId: req.params.id });
});

routes.post("/users", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
