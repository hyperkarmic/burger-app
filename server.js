const express = require('express')
const methodOverride = require('method-override')
const routes = require('./routes/handlers')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

// configure Express Handlebars

app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
  })
)
app.set('view engine', 'handlebars')

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`server is starting at port ${PORT}`)
})
