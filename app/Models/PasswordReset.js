'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Env = use('Env');
class PasswordReset extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeCreate', async model => {
      model.token = await strRandom(25);
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 30);
      model.expires_at = expiresAt;
    });
  }

  static get computed(){
    return ['url'];//[get]Url
  }

  static get dates(){
    return ['created_at', 'updated_at', 'expires_at'];
  }

  getUrl({path}){
    return `${Env.get('APP_URL')}/images/${path}`;
  }
}

module.exports = PasswordReset;
