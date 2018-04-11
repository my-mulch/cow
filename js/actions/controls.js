
class EventHandler {
    constructor() {

        this.actions = {

        }
    }

    runActions(events, data) {
        events.forEach(function (event) {
            if (this.actions[event])
                this.actions[event](data)
        }, this)
    }
}
