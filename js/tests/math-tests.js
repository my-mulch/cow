const A = new Point(1, 2, 3)
const B = new Point(4, 5, 6)

const V_AB = A.subtractPoint(B)

console.assert(V_AB instanceof Vector)
console.assert(V_AB.get(0) === -3)
console.assert(V_AB.get(1) === -3)
console.assert(V_AB.get(2) === -3)

const V1 = new Vector(10, 23, -12)
const A1 = A.addVector(V1)

console.assert(A1 instanceof Point)
console.assert(A1.get(0) === 11)
console.assert(A1.get(1) === 25)
console.assert(A1.get(2) === -9)


