exports.seed = async function (knex) {
  await knex("bucketList").del();
  await knex("bucketList").insert([
    {
      id: 1,
      user_id: 1,
      city: "Paris",
      person: "John Doe",
      due: "2024-02-15",
      photo: "paris_photo_url_here",
    },
    {
      id: 2,
      user_id: 2,
      city: "Tokyo",
      person: "Jane Smith",
      due: "2024-03-20",
      photo: "tokyo_photo_url_here",
    },
  ]);
};
