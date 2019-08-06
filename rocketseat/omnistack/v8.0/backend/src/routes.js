const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  name = req.query.name;
  return res.json({ message: `Hello, ${name}` });
});

routes.post("/devs", (req, res) => {
  console.log(req.body);

  return res.json(req.body);
});

module.exports = routes;
