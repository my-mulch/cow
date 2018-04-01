const ZERO_FN = () => 0
const ONE_FN = () => 1

const ROTATION = {

    X: new Matrix([
        [ONE_FN, ZERO_FN, ZERO_FN],
        [ZERO_FN, Math.cos, Math.sin],
        [ZERO_FN, -Math.sin, Math.cos]
    ]),

    Y: new Matrix([
        [Math.cos, ZERO_FN, -Math.sin],
        [ZERO_FN, ONE_FN, ZERO_FN],
        [Math.sin, ZERO_FN, Math.cos]
    ]),

    Z: new Matrix([
        [Math.cos, Math.sin, ZERO_FN],
        [-Math.sin, Math.cos, ZERO_FN],
        [ZERO_FN, ZERO_FN, ONE_FN]
    ])

}

