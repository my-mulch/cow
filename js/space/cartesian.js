const CARTESIAN = {
    I: 0,
    II: 1,
    III: 3,
    IV: 4,
    rotationCoords
}
/**
 * 
 * 
 * @param {any} vertex 
 * @param {any} center 
 * @param {any} angle 
 */
function rotationCoords(vertex, center, angle) {
    const radius = center.distanceTo(vertex)
    const H = 2 * radius * Math.sin(angle / 2)
    const phi = (Math.PI - angle) / 2

    const [centerX, centerY] = center.coordinates
    const [vertexX, vertexY] = vertex.coordinates

    const oppSide = new Point(startX, startY).distanceTo(center)
    const oppAngle = Math.asin(oppSide / radius)

    const alpha = Math.PI - oppAngle - phi

    X = H * Math.sin(alpha)
    Y = H * Math.cos(alpha)

    return [X, Y]
}