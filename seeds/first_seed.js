const userData = require("../seed-data/user");
const postData = require("../seed-data/post");
const bucketListData = require("../seed-data/bucketList");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bucketList").del();
  await knex("post").del();
  await knex("user").del();
  await knex("user").insert(userData);
  await knex("post").insert(postData);
  await knex("bucketList").insert(bucketListData);
};
