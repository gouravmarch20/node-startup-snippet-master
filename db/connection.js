const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log('----> CONNECTED TO DB SUCESSFULLY')
  })
  .catch(err => {
    console.log('the error is ' + err)
  })
