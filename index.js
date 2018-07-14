'use strict'

const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static("public"))

app.use('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(port, function (err) {
    if (err) throw err
    console.log('HTTP server patiently listening on port', port)
})

