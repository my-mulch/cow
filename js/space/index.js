const DIRECTION = {
    WEST: 0,
    NORTH: 1,
    EAST: 2,
    SOUTH: 3
}

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