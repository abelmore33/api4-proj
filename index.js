require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();

const port = process.env.PORT;

server.use(express.json());
server.use(cors());

const users = [
  { username: "abigga33", password: "chicken23" },
  { username: "mikeb123", password: "mydear" },
];

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

server.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  res.status(200).json({
    username: username,
    password: password,
  });
});

server.post("/api/login", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("<h1>Please enter username and password</h1>");
  } else {
    res.status(201).send("<h1>You are logged in</h1>");
  }
});

server.listen(port, () => {
  console.log(`\nserver is running on port:${port}\n`);
});
