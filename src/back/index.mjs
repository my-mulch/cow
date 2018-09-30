import express from 'express'
import bodyParser from 'body-parser'
import ServerHandlers from './handlers'

const port = process.env.PORT || 3000
const app = express()

app.use(express.static("dist"))
app.use(bodyParser.raw({ type: '*/*', limit: '1gb' }))

app.post('/audio', ServerHandlers.writeBuffer)
app.post('/video', ServerHandlers.writeBuffer)
app.use('*', ServerHandlers.sendIndex)

app.listen(port, console.error)
console.log('starting tcp on 3000')


import WebSocket from 'ws'

console.log('starting websocket on 3001')
new WebSocket.Server({ host: 'localhost', port: 3001 }).on('connection', console.log)