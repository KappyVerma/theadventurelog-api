/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("userName").notNullable();
      table.string("email").notNullable();
      table.string("userPassword").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("bucketList", (table) => {
      table.increments("id").primary();
      table.string("place").notNullable();
      table.string("withWho").notNullable();
      table.string("dueDate").notNullable();
      table.string("img_url").notNullable();
      table.boolean("status").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("destination", (table) => {
      table.increments("id").primary();
      table.string("visitedPlaces").notNullable();
      table.string("content").notNullable();
      table.string("img_url").notNullable();
      table.float("ratings");
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
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
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
