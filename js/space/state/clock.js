class Clock {

    constructor() {
        this.bang = 0.000001
    }

    *tick() {
        while (true) yield this.bang *= 1.90;
    }

}
