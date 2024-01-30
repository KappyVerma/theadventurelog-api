exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      userName: "John Doe",
      email: "john.doe@example.com",
      userPassword: "hashed_password_here",
    },
    {
      id: 2,
      userName: "Jane Smith",
      email: "jane.smith@example.com",
      userPassword: "hashed_password_here",
    },
    {
      id: 3,
      userName: "mary_jones",
      email: "mary@example.com",
      userPassword: "hashed_password",
    },
  ]);
};
