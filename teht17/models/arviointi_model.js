const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idOpintojakso,idOpiskelija,Arvosana,Päiväys) values(?,?,?,?)',
      [arviointi.idOpintojakso, arviointi.idOpiskelija, arviointi.Arvosana,arviointi.Päiväys],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idOpintojakso=?,idOpiskelija=?, Arvosana=?, Päiväys=? where idArviointi=?',
      [arviointi.idOpintojakso, arviointi.idOpiskelija, arviointi.Arvosana,arviointi.Päiväys, id],
      callback
    );
  }
};
module.exports = arviointi;