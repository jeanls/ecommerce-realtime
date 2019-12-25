'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments();
      table.timestamps();
      table.string('path', 255);
      table.integer('size').unsigned();
      table.string('extension', 10);

    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
