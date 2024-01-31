exports.seed = async function (knex) {
  await knex("bucketList").del();
  await knex("bucketList").insert([
    {
      id: 1,
      user_id: 1,
      destination: "Paris",
      withWho: "John Doe",
      dueDate: "2024-02-15",
      img_url: "paris_photo_url_here",
      status: false,
    },
    {
      id: 2,
      user_id: 2,
      destination: "Tokyo",
      withWho: "Jane Smith",
      dueDate: "2024-03-20",
      img_url: "tokyo_photo_url_here",
      status: false,
    },
    {
      id: 3,
      user_id: 1,
      destination: "New York City",
      withWho: "Solo",
      dueDate: "2024-10-15",
      img_url: "nyc_image_url.jpg",
      status: true,
    },
    {
      id: 4,
      user_id: 3,
      destination: "Barcelona",
      withWho: "Partner",
      dueDate: "2024-09-20",
      img_url: "barcelona_image_url.jpg",
      status: false,
    },
    {
      id: 5,
      user_id: 2,
      destination: "Sydney",
      withWho: "Friends",
      dueDate: "2024-11-25",
      img_url: "sydney_image_url.jpg",
      status: false,
    },
  ]);
};
