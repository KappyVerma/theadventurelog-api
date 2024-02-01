/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("bucketlist", (table) => {
      table.increments("id").primary();
      table.string("destination").notNullable();
      table.string("accompany").notNullable();
      table.string("duedate").notNullable();
      table.string("image_url").notNullable();
      table.boolean("status").notNullable().defaultTo(false);
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
    .createTable("venue", (table) => {
      table.increments("id").primary();
      table.string("visitedplaces").notNullable();
      table.string("content").notNullable();
      table.string("image_url").notNullable();
      table.float("ratings");
      table
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("bucketlist_id")
        .notNullable()
        .unsigned()
        .references("bucketlist.id")
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
    .dropTable("venue")
    .dropTable("bucketlist")
    .dropTable("user");
};
