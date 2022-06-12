const connection = require('./connection')

const orm = {
  selectAll: function (cb) {
    connection.query('SELECT * FROM restaurant_burger', (req, res) => {
      if (err) cb(err, null)
      cb(null, data)
    })
  },
}

module.exports = orm
