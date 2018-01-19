const KEYMAP = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
    "F1": true,
    "F2": true,
    "F3": true,
    "F4": true,
    "F5": true,
    "F6": true,
    "F7": true,
    "F8": true,
    "F9": true,
    "F10": true,
    "`": true,
    "Shift": true,
    "#": true,
    "$": true,
    "%": true,
    "^": true,
    "&": true,
    "*": true,
    "_": true,
    "+": true,
    "=": true,
    "-": true,
    "~": true,
    "Tab": true,
    "q": true,
    "Q": true,
    "w": true,
    "W": true,
    "e": true,
    "E": true,
    "r": true,
    "R": true,
    "t": true,
    "T": true,
    "y": true,
    "Y": true,
    "u": true,
    "U": true,
    "[": true,
    "]": true,
    ":": true,
    "Enter": true,
    "/": true,
    ".": true,
    ";": true,
    ",": true,
    "l": true,
    "k": true,
    "m": true,
    "n": true,
    "j": true,
    "h": true,
    "b": true,
    "g": true,
    "v": true,
    "f": true,
    "d": true,
    "c": true,
    "x": true,
    "s": true,
    "a": true,
    "z": true,
    "CapsLock": true,
    "Control": true,
    "Alt": true,
    "Meta": true,
    " ": true,
    "ArrowLeft": true,
    "ArrowUp": true,
    "ArrowRight": true,
    "ArrowDown": true,
    "Backspace": true,
    "L": true,
    "J": true,
    "K": true,
    "(": true,
    "O": true,
    "}": true
}


console.log(new Set(Object.keys(KEYMAP)))
const AXIS = {
    X: 0,
    Y: 1,
    Z: 2
}

const CARTESIAN = {
    I: 0,
    II: 1,
    III: 2,
    IV: 3
}

// const ORIGIN = new Point(0, 0)
// const CANVAS = document.getElementById('myCanvas')

/**
 * Provide the cartesian X,Y coordinates for a rotation
 * 
 * @param {Point} vertex The point we wish to rotate
 * @param {Point} center The point around which to rotate
 * @param {Double} angle The angle we wish to rotate
 * @param {Point} support The point creating a right triangle with vertex
 * @returns X,Y coordinates in cartesian space
 */
function rotationCoords(vertex, center, angle, support) {
    const radius = center.distanceTo(vertex)
    const H = 2 * radius * Math.sin(angle / 2)
    const phi = (Math.PI - angle) / 2

    const oppSide = support.distanceTo(center)
    const oppAngle = Math.asin(oppSide / radius)

    const alpha = Math.PI - oppAngle - phi

    X = H * Math.sin(alpha)
    Y = H * Math.cos(alpha)

    return [X, Y]
}