const V1 = new Vector(10, 23, -12)
const V2 = new Vector(-7, 2, 8)
const V3 = V1.addVector(V2)

console.assert(V3 instanceof Vector)
console.assert(V3.get(0) === 3)
console.assert(V3.get(1) === 25)
console.assert(V3.get(2) === -4)


console.assert(V1.dot(V2) === -120)
console.assert(V1.cross(V2).dot(V2) === 0)
console.assert(V2.cross(V1).dot(V1) === 0)

