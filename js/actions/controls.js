
class EventHandler {
    constructor() {

        this.actions = {
            /*  MOVEMENT */
            ArrowUp: (shape) => shape.vertices.forEach(vertex => vertex.coordinates = TRANSLATION.Y.parametrize(-8).transform(vertex.coordinates)),
            ArrowDown: (shape) => shape.vertices.forEach(vertex => vertex.coordinates = TRANSLATION.Y.parametrize(8).transform(vertex.coordinates)),
            ArrowLeft: (shape) => shape.vertices.forEach(vertex => vertex.coordinates = TRANSLATION.X.parametrize(-8).transform(vertex.coordinates)),
            ArrowRight: (shape) => shape.vertices.forEach(vertex => vertex.coordinates = TRANSLATION.X.parametrize(8).transform(vertex.coordinates)),

            /*  ROTATION */
            q: (shape) => {
                shape.vertices.forEach(vertex => {
                    vertex.coordinates = TRANSLATION.Y.parametrize(-300).transform(vertex.coordinates)
                    vertex.coordinates = TRANSLATION.X.parametrize(-350).transform(vertex.coordinates)

                    vertex.coordinates = ROTATION.Y.parametrize(-Math.PI / 512).transform(vertex.coordinates)

                    vertex.coordinates = TRANSLATION.Y.parametrize(300).transform(vertex.coordinates)
                    vertex.coordinates = TRANSLATION.X.parametrize(350).transform(vertex.coordinates)
                })
            },
            a: (shape) => {
                shape.vertices.forEach(vertex => {
                    vertex.coordinates = TRANSLATION.Y.parametrize(-300).transform(vertex.coordinates)
                    vertex.coordinates = TRANSLATION.X.parametrize(-350).transform(vertex.coordinates)

                    vertex.coordinates = ROTATION.Z.parametrize(-Math.PI / 512).transform(vertex.coordinates)

                    vertex.coordinates = TRANSLATION.Y.parametrize(300).transform(vertex.coordinates)
                    vertex.coordinates = TRANSLATION.X.parametrize(350).transform(vertex.coordinates)
                })
            },

            z: (shape) => {
                shape.vertices.forEach(vertex => {
                    vertex.coordinates = TRANSLATION.Y.parametrize(-300).transform(vertex.coordinates)
                    vertex.coordinates = TRANSLATION.X.parametrize(-350).transform(vertex.coordinates)

                    vertex.coordinates = ROTATION.X.parametrize(-Math.PI / 512).transform(vertex.coordinates)

                    vertex.coordinates = TRANSLATION.Y.parametrize(300).transform(vertex.coordinates)
                    vertex.coordinates = TRANSLATION.X.parametrize(350).transform(vertex.coordinates)
                })
            },

            /* ZOOM */
            i: (shape) => shape.zoom(1.1),
            o: (shape) => shape.zoom(0.89)
        }
    }

    runActions(events, data) {
        events.forEach(function (event) {
            if (this.actions[event])
                this.actions[event](data)
        }, this)
    }
}
