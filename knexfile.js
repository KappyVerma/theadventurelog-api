require("dotenv").config();

module.exports = {
  client: "mysql2",
  conneection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    passpord: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8",
  },
};
