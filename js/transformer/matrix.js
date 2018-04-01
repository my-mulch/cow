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
     * Matrix multiple to transform vertex (array of numbers)
     * 
     * @param {Array} Coordinates representing vertex 
     * @returns {Array} Coordinates of transformed vertex
     * @memberof Matrix
     */
    multiply(vertex) {
        return this.matrix.map(function (basisVector) {
            return basisVector.reduce(function (result, basisVectorValueAtIndex, index) {
                return result + basisVectorValueAtIndex * vertex[index]
            }, 0)
        })
    }

}


