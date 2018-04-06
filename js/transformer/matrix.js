class Matrix {

    /**
     * Creates an instance of Matrix.
     * @param {Array{Array}} matrix eg. [[1,2,3],[4,5,6],[7,8,9]]
     * @memberof Matrix
     */
    constructor(data, shape) {
        this.data = data
        this.shape = shape
    }

    /**
     * Multiply the current matrix by another   
     * 
     * @param {any} matrix 
     * @returns 
     * @memberof Matrix
     */
    compose(matrix) {
        const newData = new Array()

        for (let r = 0; r < this.shape[0]; r++) {
            const innProd = new Array(matrix.shape[1]).fill(0)

            for (let c = 0; c < matrix.shape[1]; c++) {
                for (let i = 0; i < this.shape[1]; i++) {
                    innProd[c] += this.data[r][i] * matrix.data[i][c]
                }
            }

            newData.push(innProd)
        }

        return new Matrix(newData, [this.shape[0], matrix.shape[1]])
    }

    /**
     * Matrix multiply to transform vertex (array of numbers)
     * 
     * @param {Array} Coordinates representing vertex 
     * @returns {Array} Coordinates of transformed vertex
     * @memberof Matrix
     */
    transform(vertex) {
        return this.data.map(function (basisVector) {
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
        return new Matrix(this.data.map(function (row) {
            return row.map(function (fn) {
                return fn(param)
            })
        }))
    }

}


