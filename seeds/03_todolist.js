exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todolist").del();
  await knex("todolist").insert([
    {
      id: 1,
      todoitem: "i want to swim",
      status: 0,
      bucketList_id: 1,
    },
    {
      id: 2,
      todoitem: "i want to dive",
      status: 0,
      bucketList_id: 2,
    },
  ]);
};
