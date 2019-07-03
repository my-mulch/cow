import bb from 'big-box'

export default {
    media: {
        frameRate: 30,

        videoHeight: 100,
        videoWidth: 100,

        imageHeight: 400,
        imageWidth: 300,
    },

    graphics: {
        to: bb.array({ with: [[0], [0], [0]] }),
        up: bb.array({ with: [[0], [1], [0]] }),
        from: bb.array({ with: [[4], [2.75], [-2]] }),

        angle: 30,
        aspect: 1,
        near: 0.1,
        far: 100,
        zoomDelta: 0.1,
        activeVertices: 0,

        bindings: {
            'o': { name: 'zoom', args: [true] },
            'i': { name: 'zoom', args: [false] },
        }
    }
}
