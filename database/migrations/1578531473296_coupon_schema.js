'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up () {
    this.create('coupons', (table) => {
      table.increments();
      table.timestamps();
      table.string('code', 100).notNullable();
      table.datatime('valid_from');
      table.datatime('valid_until');
      table.integer('quantity').defaultTo(1);
      table.enu('can_use_for', ['product', 'client', 'product_client', 'all']);
      table.enu('type', ['free', 'percent', 'currency']).defaultTo('currency');
      table.boolean('recursive').defaultTo(false);
    })
  }

  down () {
    this.drop('coupons')
  }
}

module.exports = CouponSchema
