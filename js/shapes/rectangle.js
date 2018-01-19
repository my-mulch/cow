
class Rectangle extends Shape {

    /**
     * Rotate the rectangle by a given angle
     * 
     * @param {Integer} angle 
     * @memberof Rectangle
     */
    rotate(theta) {
        /** 
            2 * phi + theta === pi / 2 === 180 degrees
            In other words, we can construct an
            isosceles triangle with base angles phi

            H is the base of this triangle

            From here, we can see the right triangle
            corresponding to our rotation and glean from 
            it our X and Y coordinate shifts
        **/

        const center = this.getCenter()

        this.vertices.forEach(function (vertex) {

            const [centerX, centerY] = center.coordinates
            const [vertexX, vertexY] = vertex.coordinates

            let X, Y
            switch (this.getQuadrant(vertex, center)) {
                // Upper Right
                case CARTESIAN.I:
                    [X, Y] = CARTESIAN.rotationCoords(
                        vertex,
                        center,
                        theta,
                        { X: centerX, Y: vertexY }
                    )

                    vertex.shift(Y, X)
                    break

                // Upper left
                case CARTESIAN.II:
                    [X, Y] = CARTESIAN.rotationCoords(
                        vertex,
                        center,
                        theta,
                        { X: vertexX, Y: centerY }
                    )

                    vertex.shift(X, -Y)
                    break

                // Lower left
                case CARTESIAN.III:
                    [X, Y] = CARTESIAN.rotationCoords(
                        vertex,
                        center,
                        theta,
                        { X: centerX, Y: vertexY }
                    )

                    vertex.shift(-Y, -X)
                    break

                // Lower right
                case CARTESIAN.IV:
                    [X, Y] = CARTESIAN.rotationCoords(
                        vertex,
                        center,
                        theta,
                        { X: vertexX, Y: centerY }
                    )

                    vertex.shift(-X, Y)
                    break
            }

        }, this)

        this.render()

        return this
    }

    isFullySpecified() {
        return this.vertices.length === 4
    }

    toString() {
        return this.vertices.join('\n')
    }
}

