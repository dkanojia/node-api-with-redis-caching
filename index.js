'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ hello: 'Hello World' })
})

const server = app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/')
})
