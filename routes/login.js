const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.route("/").post(async (req, res) => {
  try {
    if (!req.body || !req.body.username || !req.body.password) {
      return res.status(400).json({ error: "missing username and password" });
    }

    const user = await knex("user")
      .where({ username: req.body.username })
      .first();
    if (user) {
      if (req.body.password === user.password) {
        res.status(200).json({ user });
      } else {
        res.status(401).json({ error: "Enter a valid password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("there is an error in server response");
  }
});

module.exports = router;
