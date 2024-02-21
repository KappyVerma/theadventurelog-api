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
        const updatedTodo = await knex("todolist")
          .where({
            id: data[0],
          })
          .first();
        res.status(200).json(updatedTodo);
      } else {
        res.json({ message: "There is a problem with inserting in table" });
      }
    } catch (error) {
      res.status(400).json({ error: "Connection not made with table" });
    }
  });

router
  .route("/:id")
  .delete(async (req, res) => {
    if (!req.params.id) {
      res.status(400).json({ error: "The id is not in the todolist table" });
    }
    try {
      const data = await knex("todolist").where({ id: req.params.id }).delete();
      if (data === 1) {
        res.status(200).json(await knex("todolist"));
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ error: "Error in deleting data" });
    }
  })
  .patch(async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ error: "Request body is empty or missing data" });
    }
    try {
      const rowUpdate = await knex("todolist")
        .where({ id: req.params.id })
        .update(req.body);
      if (rowUpdate == 0)
        res
          .status(404)
          .json(`The todolist with ${req.params.id} is not available`);

      const updatedTodoList = await knex("todolist");
      res.status(200).json(updatedTodoList);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "unable to update with the todolist id" });
    }
  });

module.exports = router;
