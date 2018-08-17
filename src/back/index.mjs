import WebSocket from 'ws'

class WebSocketServer {
    constructor(options) {
        this.server = new WebSocket.Server(options)
        this.server.on('connection', this.acceptClient.bind(this))
    }

    acceptClient(client) {
        client.on('message', this.broadcast.bind(this))
    }

    broadcast(data) {
        this.server.clients.forEach(function each(client) {
            client.send(data)
        })
    }
}

new WebSocketServer({
    host: 'localhost',
    port: 3000
})