const P1 = new Point(1, 2, 3)
const P2 = new Point(4, 5, 6)

const Ph = P1.subtractPoint(P2)

console.assert(Ph instanceof Vector)
console.assert(Ph.get(0) === -3)
console.assert(Ph.get(1) === -3)
console.assert(Ph.get(2) === -3)


