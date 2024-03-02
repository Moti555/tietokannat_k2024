var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database');
const bcrypt = require('bcryptjs');
const basicAuth = require('express-basic-auth');


const bookRouter = require('./routes/book.js');
const borrower = require('./routes/borrower.js');
const userRouter = require('./routes/user.js');

var app = express();
//app.use(basicAuth({users: { 'admin': '1234' }}))
app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/borrower', borrower);
app.use('/user', userRouter);

function myAuthorizer(username, password,cb){
    db.query('SELECT password FROM user WHERE username = ?',[username], 
      function(dbError, dbResults, fields) {
        if(dbError){
              response.json(dbError);
            }
        else {
          if (dbResults.length > 0) {
            bcrypt.compare(password,dbResults[0].password, 
              function(err,res) {
                if(res) {
                  console.log("Success");
                  return cb(null, true);
                }
                else {
                  console.log("Wrong password");
                  return cb(null, false);
                }			
                response.end();
              }
            );
          }
          else{
            console.log("User does not exists");
            return cb(null, false);
          }
        }
      }
    );
  }

module.exports = app;
