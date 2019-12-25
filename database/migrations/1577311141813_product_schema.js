'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments();
      table.timestamps();
      table.string('name', 200);
      table.integer('image_id').unsigned();
      table.text('description');
      table.decimal('price', 12, 2);

      table.foreign('image_id').references('id').inTable('images').onDelete('cascade');
    })

    this.create('image_product', (table) => {
      table.increments();
      table.timestamps();
      table.integer('product_id').unsigned();
      table.integer('image_id').unsigned();
      
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade');
      table.foreign('image_id').references('id').inTable('images');
    })

    this.create('category_product', table => {
      table.increments();
      table.timestamps();

      table.integer('product_id').unsigned();
      table.integer('category_id').unsigned();

      table.foreign('product_id').references('id').inTable('products').onDelete('cascade');
      table.foreign('category_id').references('id').inTable('categories');
    })
  }

  down() {
    this.drop('category_product');
    this.drop('image_product');
    this.drop('products');
  }
}

module.exports = ProductSchema
