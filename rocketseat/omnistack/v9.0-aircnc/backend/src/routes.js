const express = require("express");
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");

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

routes.post("/sessions", SessionController.store);

routes.post("/spots", SpotController.store);

module.exports = routes;
