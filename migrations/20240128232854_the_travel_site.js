/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").parimary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.timestamp("created_at").defailtTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defailtTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("bucketList", (table) => {
      table.increments("id").parimary();
      table.string("city").notNullable();
      table.string("person").notNullable();
      table.string("due").notNullable();
      table.string("photo").notNullable();
      table
        .integer("user_id")
        .notNullable.unsigned()
        .references("user.id")
        .onupdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defailtTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defailtTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("destination", (table) => {
      table.increments("id").parimary();
      table.string("content").notNullable();
      table.string("place").notNullable();
      table.float("rating");
      table
        .integer("bucketlist_id")
        .unsigned()
        .references("bucketlist.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defailtTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defailtTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("destination")
    .dropTable("bucketlist")
    .dropTable("user");
};
