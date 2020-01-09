'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments();
      table.timestamps();
      table.decimal('total', 12, 2).defaultTo(0.0);
      table.integer('user_id').unsigned();
      table.enu('status', ['pending', 'cancelled', 'shipped', 'paid', 'finished']);

      table.foreing('user_id').references('id').inTale('users').onDelete('cascade');
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
