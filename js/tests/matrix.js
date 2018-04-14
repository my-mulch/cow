const I = new Matrix([
    new Vector(1, 0, 0),
    new Vector(0, 1, 0),
    new Vector(0, 0, 1)
], [3, 3])

const A = new Matrix([
    new Vector(22, 12, 42),
    new Vector(-23, 2, 21),
    new Vector(-2, 4, 7)
], [3, 3])

const B = new Matrix([
    new Vector(2, 1, -4),
    new Vector(1, 0, 4),
    new Vector(-1, -1, -2)
], [3, 3])

const c0 = B.getColumn(1)
console.assert(c0 instanceof Vector)
console.assert(c0.get(0) === 1)
console.assert(c0.get(1) === 0)
console.assert(c0.get(2) === -1)

const AI = I.multiply(A)
console.assert(AI.shape[0] === 3 && AI.shape[1] === 3)
console.assert(AI.data[0] instanceof Vector)
console.assert(AI.data[1] instanceof Vector)
console.assert(AI.data[2] instanceof Vector)

const AB = A.multiply(B)
console.assert(AB.data[0].get(0) === 14)
console.assert(AB.data[0].get(1) === -20)
console.assert(AB.data[0].get(2) === -124)
console.assert(AB.data[1].get(0) === -65)
console.assert(AB.data[1].get(1) === -44)
console.assert(AB.data[1].get(2) === 58)
console.assert(AB.data[2].get(0) === -7)
console.assert(AB.data[2].get(1) === -9)
console.assert(AB.data[2].get(2) === 10)


const R = new Matrix([
    new Vector(2, 1, -4, 0),
    new Vector(1, 0, 4, 0),
    new Vector(-1, -1, -2, 0),
    new Vector(0, 0, 0, 1)
], [4, 4])

const T = R.transform(new Point(1, 1, 1, 1))
console.assert(T instanceof Point)
console.assert(T.get(0) === -1)
console.assert(T.get(1) === 5)
console.assert(T.get(2) === -4)
console.assert(T.get(3) === 1)

