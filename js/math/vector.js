
class Vector {

    /**
     * Creates an instance of Vector.
     * @param {...double} dimensions 
     * @memberof Vector
     */
    constructor(...dimensions) {
        this.dimensions = dimensions
    }

    /**
     * Retrieve value along axis
     * 
     * @param {int} axis 
     * @returns the value along a dimension
     * @memberof Vector
     */
    get(axis) {
        return this.dimensions[axis]
    }

    /**
     * Set value along axis
     * 
     * @param {int} axis 
     * @param {double} data 
     * @memberof Vector
     */
    set(axis, data) {
        this.dimensions[axis] = data
    }

    /**
     *  Adds two vectors elementwise
     * 
     * @param {Vector} vector 
     * @returns 
     * @memberof Vector
     */
    addVector(vector) {
        return new Vector(
            ...this.dimensions.map(function (di, i) {
                return di + vector.get(i)
            })
        )
    }

    /**
     * Scales a vector by some c
     * 
     * @param {double} c 
     * @returns 
     * @memberof Vector
     */
    scale(c) {
        return new Vector(
            ...this.dimensions.map(function (di) {
                return di * c
            })
        )
    }

    /**
     * Computes the dot product of two vectors
     * 
     * @param {Vector} vector 
     * @returns 
     * @memberof Vector
     */
    dot(vector) {
        return this.dimensions.reduce(function (dp, di, i) {
            return dp + di * vector.get(i)
        }, 0)
    }

    /**
     * Computes the cross product of two vectors (in R3)
     * 
     * @param {any} vector 
     * @returns 
     * @memberof Vector
     */
    cross(vector) {
        return new Vector(
            this.get(1) * vector.get(2)
            - this.get(2) * vector.get(1),

            this.get(0) * vector.get(2)
            - this.get(2) * vector.get(0),

            this.get(0) * vector.get(1)
            - this.get(1) * vector.get(0)
        )
    }

}