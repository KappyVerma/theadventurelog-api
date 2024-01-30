exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "hashed_password_here",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "hashed_password_here",
    },
  ]);
};
