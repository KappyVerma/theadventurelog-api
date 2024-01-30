const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.route("/").get(async (_req, res) => {
  res.send("hitting destinations server");
});

module.exports = router;
