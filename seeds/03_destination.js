exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("destination").del();
  await knex("destination").insert([
    {
      id: 1,
      bucketlist_id: 1,
      user_id: 1,
      content: "Explore the Eiffel Tower",
      place: "Paris",
      rating: 4.5,
    },
    {
      id: 2,
      bucketlist_id: 2,
      user_id: 2,
      content: "Visit Tokyo Skytree",
      place: "Tokyo",
      rating: 4.8,
    },
  ]);
};
