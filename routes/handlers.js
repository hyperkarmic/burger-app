const express = require('express')
const router = express.Router()

const orm = require('../config/orm')

router.get('/', (req, res) => {
  orm.selectAll((error, burgers) => {
    if (error) {
      return res.status(501).json({
        message: 'cannae read database!!!!',
      })
    }
    res.render('index')
  })
})

//   orm.selectAll((error, burgers)=> {

//     }

//   if (error){
// return res.status(501).json({
//   message: 'not able to query the database',

//   orm.selectAll((error, burgers)=> {
//    if(error){
//      return res.status(501).json({
//      message: 'not able to query the database'
//    })
// res.render("index")
module.exports = router
