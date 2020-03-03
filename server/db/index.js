var mysql = require('mysql');
var config = require('../../config')

var connection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
})

let books = {}

books.all = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM assessment2`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

books.oneBook = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM assessment2 WHERE id = ${id}`, (err, results) => {
            if (err) { 
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

module.exports = books;