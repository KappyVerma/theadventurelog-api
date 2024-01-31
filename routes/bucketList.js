const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router
  .route("/")
  .get(async (_req, res) => {
    try {
      const data = await knex("bucketList");
      res.status(200).json(data);
    } catch (err) {
      res.status(400).send("Error getting the data");
    }
  })
  .post(async (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Request body is empty or missing data" });
    }
    try {
      const data = await knex("bucketList").insert(req.body);

      if (data[0]) {
        const updatedBucketList = await knex("user").where({
          id: data[0],
        });
        res.status(200).json(updatedBucketList);
      } else {
        res.json({ message: "There is a problem with inserting in table" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Connection not made with table" });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const data = await knex("bucketList")
        .select("*")
        .where({ id: req.params.id });
      res.status(200).json(data);
    } catch {
      res
        .status(400)
        .json(
          "Error retrieving while getting a single data from bucketlist table"
        );
    }
  })
  .put(async (req, res) => {
    try {
      const rowUpdate = await knex("bucketList")
        .where({ id: req.params.id })
        .update(req.body);
      if (rowUpdate == 0)
        res
          .status(404)
          .json(`The bucketlist with ${req.params.id} is not available`);

      const updatedBucketList = await knex("bucketList");
      res.status(200).json(updatedBucketList);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "unable to update with the bucketlistId" });
    }
  });
router.route("/:id/places").get(async (req, res) => {
  try {
    const data = await knex("places").where({
      bucketList_id: req.params.id,
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error retrieving while getting data from server");
  }
});

module.exports = router;
