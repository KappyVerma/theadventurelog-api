const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.route("/").post(async (req, res) => {
  try {
    if (!req.body || !req.body.username || !req.body.password) {
      return res.status(400).json({ error: "missing username and password" });
    }

    const user = await knex("user")
      .where({ username: req.body.username })
      .first();

    if (!user) {
      return res.status(404).json({ error: "Incorrect username or password" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ error: "Enter a correct password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("there is an error in server response");
  }
});

module.exports = router;
