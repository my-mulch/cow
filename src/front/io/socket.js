export default class Socket {
    constructor(opts) {
        this.port = opts.port || 3001
        this.host = opts.host || 'localhost'

        this.socket = new WebSocket(`ws://${this.host}:${this.port}/`)
        this.socket.addEventListener('message', this.read.bind(this))

        this.data = null
    }

    read(message) { }
    onData(action) { }
}
