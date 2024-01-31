exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      userName: "John Doe",
      userEmail: "john.doe@example.com",
      userPassword: "hashed_password_here",
    },
    {
      id: 2,
      userName: "Jane Smith",
      userEmail: "jane.smith@example.com",
      userPassword: "hashed_password_here",
    },
    {
      id: 3,
      userName: "mary_jones",
      userEmail: "mary@example.com",
      userPassword: "hashed_password",
    },
  ]);
};
