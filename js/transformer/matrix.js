class Matrix {

    /**
     * Creates an instance of Matrix.
     * @param {Array{Array}} matrix eg. [[1,2,3],[4,5,6],[7,8,9]]
     * @memberof Matrix
     */
    constructor(matrix) {
        this.matrix = matrix
    }

    /**
     * Matrix multiply to transform vertex (array of numbers)
     * 
     * @param {Array} Coordinates representing vertex 
     * @returns {Array} Coordinates of transformed vertex
     * @memberof Matrix
     */
    transform(vertex) {
        return this.matrix.map(function (basisVector) {
            return basisVector.reduce(function (result, basisVectorValueAtIndex, index) {
                return result + basisVectorValueAtIndex * vertex[index]
            }, 0)
        })
    }

    /**
     * Matrix elements are stored as functions which accept
     * parameters. A given matrix eg. rotation by angle
     * must be parametrized before it is used
     * 
     * @param {double} param 
     * @returns {Matrix} A parametrized Matrix
     * @memberof Matrix
     */
    parametrize(param) {
        return new Matrix(this.matrix.map(function (row) {
            return row.map(function (fn) {
                return fn(param)
            })
        }))
    }

}


