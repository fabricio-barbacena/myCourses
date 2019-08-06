const express = require("express");
const DevController = require("./controllers/DevController");

const routes = express.Router();

routes.get("/", (req, res) => {
  name = req.query.name;
  return res.json({ message: `Hello, ${name}` });
});

routes.post("/devs", DevController.store);

module.exports = routes;
