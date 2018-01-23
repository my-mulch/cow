
class EventHandler {
    constructor() {
        this.actions = {
            /*  MOVEMENT */
            ArrowUp: (shape) => shape.shift(new Point(0, -10)),
            ArrowDown: (shape) => shape.shift(new Point(0, 10)),
            ArrowLeft: (shape) => shape.shift(new Point(-10, 0)),
            ArrowRight: (shape) => shape.shift(new Point(10, 0)),

            /*  ROTATION */
            s: (shape) => shape.rotate(Math.PI / 8),
            a: (shape) => shape.rotate(-Math.PI / 8),
        }
    }

    add(event, action) {
        this.actions[event] = action
    }

    runActions(events, data) {
        this.events.forEach(function (event) {
            this.actions[event](data)
        })
    }
}
