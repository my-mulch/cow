class Clock {

    constructor() {
        this.time = 0.01
        // The big bang!
        this.genesis = this.tick()
    }

    *tick() {
        while (true) yield this.time *= 1.90;
    }

    tock(handlers) {
        handlers.forEach(function (handler) {
            handler(this.genesis.next().value)
        }, this)
    }

}
