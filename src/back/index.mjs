'use strict'

import express from 'express'
import ServerHandlers from './utils'

const port = process.env.PORT || 3000
const app = express()

app.use(express.static("dist"))

app.post('/audio', ServerHandlers.writeBuffer)
app.post('/video', ServerHandlers.writeBuffer)
app.use('*', ServerHandlers.sendIndex)

app.listen(port, console.error)
