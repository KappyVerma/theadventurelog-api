const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router
  .route("/")
  .get(async (_req, res) => {
    try {
      const data = await knex("user");
      res.status(200).json(data);
    } catch (err) {
      res.status(400).send("Error while retrieving data from server");
    }
  })
  .post(async (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Request body is empty or missing data" });
    }
    try {
      const data = await knex("user").insert(req.body);

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

router.route("/:id").get(async (req, res) => {
  try {
    const data = await knex("user").select("*").where({ id: req.params.id });
    res.status(200).json(data);
  } catch {
    res
      .status(400)
      .json(
        "Error retrieving while getting a single data from warehouse table"
      );
  }
});

module.exports = router;
