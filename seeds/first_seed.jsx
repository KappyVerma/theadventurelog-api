const userData = require("../seed-data/user");
const bucketListData = require("../seed-data/bucketList");
const destinationsData = require("../seed-data/destinations");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("destinations").del();
  await knex("bucketList").del();
  await knex("user").del();
  await knex("user").insert(userData);
  await knex("bucketList").insert(bucketListData);
  await knex("destinations").insert(destinationsData);
};
