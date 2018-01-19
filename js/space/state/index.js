

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

const ORIGIN = new Point(0, 0)
const CANVAS = document.getElementById('myCanvas')

const rect = new Polygon(
    new Point(225, 225),
    new Point(350, 225),
    new Point(350, 300),
    new Point(225, 300))
    .setContext(CANVAS.getContext("2d"))
    .render()

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

const PRESSEDKEYS = new Set()

const godsclock = (function* god() {
    let index = 0.1;
    while (true)
        yield index *= 1.90;
})()


window.addEventListener("keydown", function (keyPress) {
    PRESSEDKEYS.add(keyPress.key)
    console.log(PRESSEDKEYS)
}, true);

window.addEventListener("keyup", function (keyPress) {
    PRESSEDKEYS.delete(keyPress.key)


}, true);
