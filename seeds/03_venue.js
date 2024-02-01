exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("venue").del();
  await knex("venue").insert([
    {
      id: 1,
      visitedplaces: "Central Park",
      content: "Enjoyed a peaceful day in Central Park, NYC.",
      image_url: "central_park_image.jpg",
      ratings: 4.7,
      bucketList_id: 1,
      user_id: 1,
    },
    {
      id: 2,
      visitedplaces: "Sagrada Familia",
      content: "Breathtaking architecture in Barcelona!",
      image_url: "sagrada_familia_image.jpg",
      ratings: 4.8,
      bucketList_id: 2,
      user_id: 2,
    },
    {
      id: 3,
      visitedplaces: "Sydney Opera House",
      content: "Unforgettable performance at the Opera House.",
      image_url: "sydney_opera_house_image.jpg",
      ratings: 4.5,
      bucketList_id: 3,
      user_id: 2,
    },
    {
      id: 4,
      visitedplaces: "Buckingham Palace",
      content: "Witnessed the Changing of the Guard at Buckingham Palace.",
      image_url: "buckingham_palace_image.jpg",
      ratings: 4.6,
      bucketList_id: 1,
      user_id: 1,
    },
    {
      id: 5,
      visitedplaces: "Fushimi Inari Shrine",
      content: "Explored the stunning Fushimi Inari Shrine in Kyoto.",
      image_url: "fushimi_inari_shrine_image.jpg",
      ratings: 4.9,
      bucketList_id: 2,
      user_id: 2,
    },
    {
      id: 6,
      visitedplaces: "Christ the Redeemer",
      content: "Breathtaking views from Christ the Redeemer in Rio.",
      image_url: "christ_redeemer_image.jpg",
      ratings: 4.7,
      bucketList_id: 3,
      user_id: 1,
    },
  ]);
};
