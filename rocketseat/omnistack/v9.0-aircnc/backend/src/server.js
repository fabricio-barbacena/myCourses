const express = require("express");

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  return res.json({ message: "Hello, World!" });
});

app.get("/users", (req, res) => {
  return res.json({ user: req.query.user });
});

app.get("/users/:id", (req, res) => {
  return res.json({ userId: req.params.id });
});

app.post("/users", (req, res) => {
  return res.json(req.body);
});

app.listen(3333);
