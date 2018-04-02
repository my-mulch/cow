const ZERO_FN = () => 0
const ONE_FN = () => 1

const ROTATION = {

    X: new Matrix([
        [1, 0, 0],
        [0, Math.cos, Math.sin],
        [0, -Math.sin, Math.cos],
    ]),

    Y: new Matrix([
        [Math.cos, 0, -Math.sin],
        [0, 1, 0],
        [Math.sin, 0, Math.cos]
    ]),

    Z: new Matrix([
        [Math.cos, Math.sin, 0],
        [-Math.sin, Math.cos, 0],
        [0, 0, 1],
    ])

}

