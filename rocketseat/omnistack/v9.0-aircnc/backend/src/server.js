const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  return res.json({ message: "Hello, World!" });
});

app.get("/users", (req, res) => {
  return res.json({ user: req.query.user });
});

app.get("/users/:id", (req, res) => {
  return res.json({ userId: req.params.id });
});

app.listen(3333);
