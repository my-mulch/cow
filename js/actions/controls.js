
class EventHandler {
    constructor() {
        this.actions = {
            /*  MOVEMENT */
            ArrowUp: (shape) => shape.shift(new Point(0, -4)),
            ArrowDown: (shape) => shape.shift(new Point(0, 4)),
            ArrowLeft: (shape) => shape.shift(new Point(-4, 0)),
            ArrowRight: (shape) => shape.shift(new Point(4, 0)),

            /*  ROTATION */
            s: (shape) => shape.rotate(Math.PI / 1024),
            a: (shape) => shape.rotate(-Math.PI / 1024),
        }
    }

    add(event, action) {
        this.actions[event] = action
    }

    runActions(events, data) {
        events.forEach(function (event) {
            if (this.actions[event])
                this.actions[event](data)
        }, this)
    }
}
