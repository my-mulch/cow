import WebSocket from 'ws'

export default class WebSocketServer {
    constructor(host, port) {
        this.clients = []

        this.acceptClient = this.acceptClient.bind(this)
        this.broadcast = this.broadcast.bind(this)

        this.server = new WebSocket.Server({
            host: host,
            port: port
        })

        this.server.on('connection', this.acceptClient)
    }

    acceptClient(client) {
        client.on('message', this.broadcast)
        this.clients.push(client)
    }

    broadcast(data) {
        this.clients.forEach(function (client) {
            client.send(data)
        })
    }
}