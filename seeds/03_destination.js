exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("destination").del();
  await knex("destination").insert([
    {
      id: 1,
      user_id: 1,
      bucketlist_id: 1,
      visitedPlaces: "Central Park",
      content: "Enjoyed a peaceful day in Central Park, NYC.",
      img_url: "central_park_image.jpg",
      ratings: 4.7,
    },
    {
      id: 2,
      user_id: 3,
      bucketlist_id: 2,
      visitedPlaces: "Sagrada Familia",
      content: "Breathtaking architecture in Barcelona!",
      img_url: "sagrada_familia_image.jpg",
      ratings: 4.8,
    },
    {
      id: 3,
      user_id: 2,
      bucketlist_id: 3,
      visitedPlaces: "Sydney Opera House",
      content: "Unforgettable performance at the Opera House.",
      img_url: "sydney_opera_house_image.jpg",
      ratings: 4.5,
    },
    {
      id: 4,
      user_id: 1,
      bucketlist_id: 1,
      visitedPlaces: "Buckingham Palace",
      content: "Witnessed the Changing of the Guard at Buckingham Palace.",
      img_url: "buckingham_palace_image.jpg",
      ratings: 4.6,
    },
    {
      id: 5,
      user_id: 2,
      bucketlist_id: 2,
      visitedPlaces: "Fushimi Inari Shrine",
      content: "Explored the stunning Fushimi Inari Shrine in Kyoto.",
      img_url: "fushimi_inari_shrine_image.jpg",
      ratings: 4.9,
    },
    {
      id: 6,
      user_id: 3,
      bucketlist_id: 3,
      visitedPlaces: "Christ the Redeemer",
      content: "Breathtaking views from Christ the Redeemer in Rio.",
      img_url: "christ_redeemer_image.jpg",
      ratings: 4.7,
    },
  ]);
};
