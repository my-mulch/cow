'use strict'

import express from 'express'
import ServerHandlers from './utils'

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ServerHandlers.listen)

app.post('/audio', console.log)
app.post('/video', console.log)

app.use('*', ServerHandlers.sendIndex)