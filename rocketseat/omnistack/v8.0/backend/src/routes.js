const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  name = req.query.name;
  return res.json({ message: `Hello, ${name}` });
});

module.exports = routes;
