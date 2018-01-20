class Clock {

    constructor() {
        this.time = 0.01
        // The big bang!
        this.genesis = this.start()
    }

    *start() {
        while (true) yield this.time *= 1.10
    }

    tick(handlers) {
        handlers.forEach(function (handler) {
            handler(this.genesis.next().value)
        }, this)
    }

}
