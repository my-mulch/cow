
export default class Socket {
    constructor(port, host) {
        this.port = port
        this.host = host
        this.socket = new WebSocket(`ws://${this.host}:${this.port}/`)
    }

    listen(message, fn) {
        this.socket.addEventListener(message, fn)
    }
}
