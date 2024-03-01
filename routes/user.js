const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const bcrypt = require("bcrypt");

router
  .route("/")
  .get(async (_req, res) => {
    try {
      const data = await knex("user");
      res.status(200).json(data); //changes made here (req.body)
    } catch (err) {
      res.status(400).send("Error while retrieving data from server");
    }
  })
  .post(async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = {
      username,
      password: hash,
    };

    if (!user) {
      return res
        .status(400)
        .json({ error: "Request body is empty or missing data" });
    }
    try {
      const data = await knex("user").insert(user);

      if (data[0]) {
        const updatedUser = await knex("user").where({
          id: data[0],
        });
        res.status(200).json(updatedUser);
      } else {
        res.json({ message: "There is a problem with inserting in table" });
      }
    } catch (error) {
      res.status(400).json({ error: "Connection not made with table" });
    }
  });

router.route("/:id/bucketlist").get(async (req, res) => {
  try {
    const data = await knex("bucketlist").where({ user_id: req.params.id });
    if (!req.params.id) {
      console.log("missing id");
    } else {
      res.status(200).json(data);
      console.log(data);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Error retrieving while getting data from server",
      error: err,
    });
  }
});

module.exports = router;
