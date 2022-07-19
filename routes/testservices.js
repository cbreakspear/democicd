var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
const apiKey = '1bfea4e2df247672406808abb0ecf287';
const request = require('request'); 

//host=pg-db-test.postgres.database.azure.com port=5432 
//dbname=postgres user=cbreakspear@pg-db-test password=Destination2021 sslmode=require
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'cbreakspear@pg-db-test',
  host: 'pg-db-test.postgres.database.azure.com',
  database: 'postgres',
  password: 'Destination2021',
  port: 5432,
  ssl: true,
})
/*
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '192.168.99.100',
  database: 'testdb',
  password: 'Destination2021',
  port: 5432,
})
*/

// alternative:
// var cn = 'postgres://username:password@host:port/database';



exports.landPage = function(req, res) {console.log('Landing Page');
    res.sendFile(__dirname + '/Test.html');
};

exports.getQuoteoftheDay = function (req, res) 
{
    quotes = [];

    q = { "id":"0", "quotation":"It is not only what you do, but also the attitude you bring to it that makes you a success.","author":"Don Schenck"};
    quotes.push(q);
    q = { "id":"1", "quotation":"Knowledge is power.","author":"Francis Bacon"};
    quotes.push(q);
    q = { "id":"2", "quotation":"Life is really simple, but we insist on making it complicated.","author":"Confucius"};
    quotes.push(q);
    q = { "id":"3", "quotation":"This above all, to thine own self be true.","author":"William Shakespeare"};
    quotes.push(q);
    q = { "id":"4", "quotation":"Never complain. Never explain.","author":"Katharine Hepburn"};
    quotes.push(q);
    q = { "id":"5", "quotation":"Do be do be dooo.","author":"Frank Sinatra"};
    quotes.push(q);

    const id = Math.floor(Math.random() * 5);
    
 
      res.send(quotes[id]);
  
    console.log('Sending Quote of the Day');
};

exports.getTest = function(req, res) {console.log('Reaching service for testing container');
res.status(200).json('You have reached the SERVICE :)');
};

exports.getDateandTime = function(req, res, getval) {
    

  let date_time = new Date();

// get current date
// adjust 0 before single digit date
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

// prints date & time in YYYY-MM-DD HH:MM:SS format
//console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
        res.status(200).json(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
    

      console.log('Sending Date and Time : ' + year + "-" + month + "-" + date);
     
};








