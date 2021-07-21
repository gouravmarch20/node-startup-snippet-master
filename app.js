const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
// npm
const mongoose = require('mongoose')
const express = require('express')
const app = express()
// coustom module
require('./db/connection')
// varible
const port = process.env.PORT
// ---Middleware
app.use(express.json())

// --- Import route 

const authRoutes = require("./routes/auth.route")
//  ---My route
app.use('/', authRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
