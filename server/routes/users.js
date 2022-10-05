const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user)
    return res.status(503).send({ error: [{ msg: "User Doesnt Exist" }] });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      return res.status(503).send({ error: [{ msg: "bad credentials" }] });
    const accessToken = sign(
      { username: user.username, id: user.id },
      "secretkey"
    );
    res.json(accessToken);
  });
});

module.exports = router;
