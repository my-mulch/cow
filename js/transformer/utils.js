
const sin = Math.sin
const cos = Math.cos
const c = c => c
const nsin = angle => sin(-angle)


const ROTATION = {

    X: new Matrix([
        [1, 0, 0, 0],
        [0, cos, sin, 0],
        [0, nsin, cos, 0],
        [0, 0, 0, 1]
    ]),

    Y: new Matrix([
        [cos, 0, sin, 0],
        [0, 1, 0, 0],
        [nsin, 0, cos, 0],
        [0, 0, 0, 1]
    ]),

    Z: new Matrix([
        [cos, sin, 0, 0],
        [nsin, cos, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ])

}

const TRANSLATION = new Matrix([
    [1, 0, 0, c],
    [0, 1, 0, c],
    [0, 0, 1, c],
    [0, 0, 0, 1]
])

const CAMERA = {
    orthographic: new Matrix([
        [c, 0, 0, 0],
        [0, c, 0, 0],
        [0, 0, c, c],
        [0, 0, 0, 1]
    ]),

    projection: new Matrix([
        [c, 0, 0, 0],
        [0, c, 0, 0],
        [0, 0, c, c],
        [0, 0, -1, 0]
    ]),

}