const { createConnection } = require('mysql')
const mysql = require('mysql')

let connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'simon',
    password: 'password',
    database: 'burgers_DB',
  },
  console.log('connected')
)

// mysql.connect(function (err) {
//   if (err) throw err
//   console.log('Connected!')
// })
