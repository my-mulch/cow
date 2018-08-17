export default class Socket {
    constructor(opts) {
        this.port = opts.port || 3000
        this.host = opts.host || 'localhost'
        this.socket = new WebSocket(`ws://${this.host}:${this.port}/`)
    }

    listen(message, fn) {
        this.socket.addEventListener(message, fn)
    }
}
