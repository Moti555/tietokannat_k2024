const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user',
  password: 'xxxx',
  database: 'test_db2'
});
module.exports = connection;