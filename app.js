const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const day = date.getDate()
  const result = `${day}-${month}-${year}`
  response.send(result)
})

app.listen(3000)
module.exports = app
