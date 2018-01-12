const DIRECTION = {
    WEST: 0,
    NORTH: 1,
    EAST: 2,
    SOUTH: 3
}

class Rectangle {

    constructor(A, B, C, D) {
        this.A = A
        this.B = B
        this.C = C
        this.D = D

        this.context = null
    }

    setContext(context) {
        this.context = context
    }

    locate(vertex) {
        return Object.values(this[vertex])
    }

    rotate(degree) { }

    moveVertices(dimension, amount) {
        Object.keys(this).forEach(function (vertex) {
            this[vertex][dimension] += amount
        }, this)
    }

    shift(dir, amount) {
        switch (dir) {
            case DIRECTION.WEST: this.moveVertices('x', -amount)
                break
            case DIRECTION.EAST: this.moveVertices('x', amount)
                break
            case DIRECTION.NORTH: this.moveVertices('y', -amount)
                break
            case DIRECTION.SOUTH: this.moveVertices('y', amount)
                break
        }

        this.render()
    }

    extend(point) { }

    render() {

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.beginPath()

        this.context.moveTo(...this.locate('A'));
        this.context.lineTo(...this.locate('B'));

        this.context.moveTo(...this.locate('B'));
        this.context.lineTo(...this.locate('C'));

        this.context.moveTo(...this.locate('C'));
        this.context.lineTo(...this.locate('D'));

        this.context.moveTo(...this.locate('D'));
        this.context.lineTo(...this.locate('A'));

        this.context.stroke();
    }
}

