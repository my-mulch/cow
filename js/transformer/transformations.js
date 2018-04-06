

function translate(shape, params) {
    return params.dimensions
        .map(function (dim, i) {
            return TRANSLATION[dim].parametrize(params.distances[i])
        })
        .reduce(function (composition, current, idx) {
            return composition.compose(current)
        }, Matrix.eye(4))
}

function rotate(shape, params) {
    const [Xt, Yt, Zt, _] = shape.computeCenter().coordinates

    const translationOrigin = translate(shape, {
        dimensions: ['X', 'Y', 'Z'],
        distances: [-Xt, -Yt, -Zt]
    })

    const rotation = ROTATION[params.angle].parametrize(params.angle)

    const translationBackToOriginalPos = translate(shape, {
        dimensions: ['X', 'Y', 'Z'],
        distances: [Xt, Yt, Zt]
    })

    return translationOrigin.compose(rotation).compose(translationBackToOriginalPos)
}
