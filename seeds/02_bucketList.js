exports.seed = async function (knex) {
  await knex("bucketlist").del();
  await knex("bucketlist").insert([
    {
      id: 1,
      destination: "Paris",
      accompany: "John Doe",
      duedate: "2024-02-15",
      image_url: "paris_photo_url_here",
      status: false,
      user_id: 1,
    },
    {
      id: 2,
      destination: "Tokyo",
      accompany: "Jane Smith",
      duedate: "2024-03-20",
      image_url: "tokyo_photo_url_here",
      status: false,
      user_id: 2,
    },
    {
      id: 3,
      destination: "New York City",
      accompany: "Solo",
      duedate: "2024-10-15",
      image_url: "nyc_image_url.jpg",
      status: true,
      user_id: 1,
    },
    {
      id: 4,
      destination: "Barcelona",
      accompany: "Partner",
      duedate: "2024-09-20",
      image_url: "barcelona_image_url.jpg",
      status: false,
      user_id: 2,
    },
    {
      id: 5,
      destination: "Sydney",
      accompany: "Friends",
      duedate: "2024-11-25",
      image_url: "sydney_image_url.jpg",
      status: false,
      user_id: 2,
    },
  ]);
};
