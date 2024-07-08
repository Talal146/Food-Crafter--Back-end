const express = require('express')
const logger = require('morgan')

require('./seeders/categories')
const AuthRouter = require('./routes/AuthRouter')
const CategoryRouter = require('./routes/CategoryRouter')
const RecipeRouter = require('./routes/RecipeRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/categories', CategoryRouter)
app.use('/recipes', RecipeRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
