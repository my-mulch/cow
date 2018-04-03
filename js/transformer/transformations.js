Math.nsin = (angle) => Math.sin(-angle)

const ZERO = () => 0
const ONE = () => 1
const SCALAR = (k) => k


const ROTATION = {

    X: new Matrix([
        [ONE, ZERO, ZERO, ZERO],
        [ZERO, Math.cos, Math.sin, ZERO],
        [ZERO, Math.nsin, Math.cos, ZERO],
        [ZERO, ZERO, ZERO, ONE]
    ]),

    Y: new Matrix([
        [Math.cos, ZERO, Math.sin, ZERO],
        [ZERO,      ONE, ZERO, ZERO],
        [Math.nsin, ZERO, Math.cos, ZERO],
        [ZERO,      ZERO, ZERO, ONE]
    ]),

    Z: new Matrix([
        [Math.cos, Math.sin, ZERO, ZERO],
        [Math.nsin, Math.cos, ZERO, ZERO],
        [ZERO, ZERO, ONE, ZERO],
        [ZERO, ZERO, ZERO, ONE]
    ])

}

const TRANSLATION = {
    X: new Matrix([
        [ONE, ZERO, ZERO, SCALAR],
        [ZERO, ONE, ZERO, ZERO],
        [ZERO, ZERO, ONE, ZERO],
        [ZERO, ZERO, ZERO, ONE]
    ]),

    Y: new Matrix([
        [ONE, ZERO, ZERO, ZERO],
        [ZERO, ONE, ZERO, SCALAR],
        [ZERO, ZERO, ONE, ZERO],
        [ZERO, ZERO, ZERO, ONE]
    ]),

    Z: new Matrix([
        [ONE, ZERO, ZERO, ZERO],
        [ZERO, ONE, ZERO, ZERO],
        [ZERO, ZERO, ONE, SCALAR],
        [ZERO, ZERO, ZERO, ONE]
    ]),

}