const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router
  .route("/")
  .get(async (_req, res) => {
    const data = await knex("places");
    res.status(200).json(data);
  })
  .post(async (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Request body is empty or missing data" });
    }
    try {
      const data = await knex("places").insert(req.body);

      if (data[0]) {
        const updatedPlaces = await knex("user").where({
          id: data[0],
        });
        res.status(200).json(updatedPlaces);
      } else {
        res.json({ message: "There is a problem with inserting in table" });
      }
    } catch (error) {
      res.status(400).json({ error: "Connection not made with table" });
    }
  });

router.route("/:id").delete(async (req, res) => {
  console.log(req.params.id);
  if (!req.params.id) {
    res.status(400).json({ error: "The id is not in the places table" });
  }
  try {
    const data = await knex("places").where({ id: req.params.id }).delete();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error in deleting data" });
  }
});

module.exports = router;
