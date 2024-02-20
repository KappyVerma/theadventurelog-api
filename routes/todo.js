const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router
  .route("/")
  .get(async (_req, res) => {
    try {
      const data = await knex("todolist");
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
      const data = await knex("todolist").insert(req.body);

      if (data[0]) {
        const updatedTodo = await knex("todolist").where({
          id: data[0],
        });
        res.status(200).json(updatedTodo);
      } else {
        res.json({ message: "There is a problem with inserting in table" });
      }
    } catch (error) {
      res.status(400).json({ error: "Connection not made with table" });
    }
  });

module.exports = router;
