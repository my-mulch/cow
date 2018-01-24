class Rectangle extends Polygon {
    constructor(V1, V2) {
        const [C1, C2] = V1.corners(V2)
        super(V1, C1, V2, C2)
    }
}
