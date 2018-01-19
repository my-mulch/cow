
const ORIGIN = new Point(0, 0)
const CANVAS = document.getElementById('myCanvas')
const PRESSED_KEYS = new Set()
const CARTESIAN = { I: 0, II: 1, III: 2, IV: 3 }

const PRESSED_KEY_HANDLERS = {
    ArrowUp: (velocity) => selected.shift(new Point(0, -velocity)),
    ArrowDown: (velocity) => selected.shift(new Point(0, velocity)),
    ArrowLeft: (velocity) => selected.shift(new Point(-velocity, 0)),
    ArrowRight: (velocity) => selected.shift(new Point(velocity, 0))
}

window.addEventListener("keydown", function (keyDownEvent) {
    keyDownEvent.preventDefault()

    PRESSED_KEYS.add(keyDownEvent.key)

    PRESSED_KEYS.forEach(function (key) {
        PRESSED_KEY_HANDLERS[key](GODS_CLOCK.next().value)
    })

}, true);

window.addEventListener("keyup", function (keyUpEvent) {
    keyUpEvent.preventDefault()

    PRESSED_KEYS.delete(keyUpEvent.key)

    PRESSED_KEYS.forEach(function (key) {
        PRESSED_KEY_HANDLERS[key](GODS_CLOCK.next().value)
    })
}, true);
