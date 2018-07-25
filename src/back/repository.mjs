class Repository {
    constructor() {
        this.clients = []

        this.acceptClient = this.acceptClient.bind(this)
        this.broadcast = this.broadcast.bind(this)
    }

    acceptClient(client) {
        client.on('data', this.broadcast)
        this.clients.push(client)
    }

    broadcast(data) {
        this.clients.forEach(function (client) {
            client.write(data)
        })
    }
}

export default new Repository()