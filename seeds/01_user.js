exports.seed = async function (knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: 21,
      username: "kappy",
      password: "hello",
    },
    {
      id: 22,
      username: "nik",
      password: "hello",
    },
  ]);
};
