'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PassordResetSchema extends Schema {
  up () {
    this.create('password_resets', (table) => {
      table.increments();
      table.timestamps();
      table.string('token', 254).notNullable().unique();
      table.string('email').notNullable();
      table.dateTime('expires_at');

      table.foreign('email').references('email').inTable('users').onDelete('cascade');
    })
  }

  down () {
    this.drop('password_resets')
  }
}

module.exports = PassordResetSchema
