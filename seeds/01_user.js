exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      username: "kappy",
      password: "hello",
    },
    {
      id: 2,
      username: "nik",
      password: "hello",
    },
  ]);
};
