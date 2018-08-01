import Point from './point'

export function circle(radius, center, res) {
    return new Array(res)
        .fill(null)
        .map(function (_, i) {
            return new Point(
                center.x + radius * Math.cos((i / res) * 2 * Math.PI),
                center.y + radius * Math.sin((i / res) * 2 * Math.PI))
        })
}
