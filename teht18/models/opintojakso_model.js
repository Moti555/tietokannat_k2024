const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Nimi,Laajuus,Koodi) values(?,?,?)',
      [opintojakso.nimi, opintojakso.laajuus, opintojakso.koodi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set nimi=?,laajuus=?, koodi=? where idOpintojakso=?',
      [opintojakso.nimi, opintojakso.laajuus, opintojakso.koodi, id],
      callback
    );
  }
};
module.exports = opintojakso;