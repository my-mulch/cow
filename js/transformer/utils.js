
const sin = Math.sin
const cos = Math.cos
const c = c => c
const nsin = angle => sin(-angle)


const ROTATION = {

    X: new Matrix([
        new Vector(1, 0, 0, 0),
        new Vector(0, cos, sin, 0),
        new Vector(0, nsin, cos, 0),
        new Vector(0, 0, 0, 1)
    ]),

    Y: new Matrix([
        new Vector(cos, 0, sin, 0),
        new Vector(0, 1, 0, 0),
        new Vector(nsin, 0, cos, 0),
        new Vector(0, 0, 0, 1)
    ]),

    Z: new Matrix([
        new Vector(cos, sin, 0, 0),
        new Vector(nsin, cos, 0, 0),
        new Vector(0, 0, 1, 0),
        new Vector(0, 0, 0, 1)
    ])

}

const TRANSLATION = new Matrix([
    new Vector(1, 0, 0, c),
    new Vector(0, 1, 0, c),
    new Vector(0, 0, 1, c),
    new Vector(0, 0, 0, 1)
])

const CAMERA = {
    orthographic: new Matrix([
        new Vector(c, 0, 0, 0),
        new Vector(0, c, 0, 0),
        new Vector(0, 0, c, c),
        new Vector(0, 0, 0, 1)
    ]),

    projection: new Matrix([
        new Vector(c, 0, 0, 0),
        new Vector(0, c, 0, 0),
        new Vector(0, 0, c, c),
        new Vector(0, 0, -1, 0)
    ]),

}