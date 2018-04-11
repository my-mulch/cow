class Matrix {

    /**
     * Creates an instance of Matrix.
     * @param {Vector[], int[]}
     * @memberof Matrix
     */
    constructor(data, shape) {
        this.data = data
        this.shape = shape
    }

    /**
     * Get a column from a matrix
     * 
     * @param {any} i 
     * @returns 
     * @memberof Matrix
     */
    getColumn(i) {
        return new Vector(
            ...this.data.map(function (rowVec) {
                return rowVec.get(i)
            })
        )
    }

    /**
     * Multiply the current matrix by another   
     * 
     * @param {any} matrix 
     * @returns 
     * @memberof Matrix
     */
    multiply(matrix) {
        const [or, oc] = this.shape
        const [nr, nc] = matrix.shape

        const newShape = [or, nc]
        const newData = this.data.map(function (rowVec) {
            const innerProd = []

            for (let i = 0; i < nc; i++)
                innerProd.push(rowVec.dot(matrix.getColumn(i)))

            return new Vector(...innerProd)
        })

        return new Matrix(newData, newShape)
    }

    /**
     * Parametrize a matrix eg rotation with angle
     * 
     * @param {any} params 
     * @returns 
     * @memberof Matrix
     */
    parametrize(...params) {
        const numParams = params.length
        const [rows, cols] = this.shape

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const vec = this.data[r]
                const member = vec.get(c)

                if (typeof member === 'function')
                    vec.set(c, member(params.shift()))
            }
        }

        return this
    }
}


