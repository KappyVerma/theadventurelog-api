exports.seed = async function (knex) {
  await knex("bucketlist").del();
  await knex("bucketlist").insert([
    {
      id: 1,
      destination: "Paris",
      accompany: "John Doe",
      duedate: "2024-02-15",
      status: false,
      user_id: 21,
    },
    {
      id: 2,
      destination: "Tokyo",
      accompany: "Jane Smith",
      duedate: "2024-03-20",
      status: false,
      user_id: 22,
    },
    {
      id: 3,
      destination: "New York City",
      accompany: "Solo",
      duedate: "2024-10-15",
      status: true,
      user_id: 21,
    },
  ]);
};
