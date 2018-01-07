class Rectangle {
    constructor(A, B, C, D) {
        this.A = A
        this.B = B
        this.C = C
        this.D = D

        setRetrieval(this.A)
        setRetrieval(this.B)
        setRetrieval(this.C)
        setRetrieval(this.D)
    }

    setRetrieval(vertex) {
        vertex.valueOf = function () {
            return Object.values(vertex)
        }
    }

    extend(point) {

    }

    render(context) {
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
    }
}

const rect = new Rectangle(
    {
        x: 100,
        y: 100
    },
    {
        x: 600,
        y: 100
    },
    {
        x: 100,
        y: 400
    },
    {
        x: 600,
        y: 400
    })

const canvas = document.getElementById('myCanvas')
const context = canvas.getContext("2d")

rect.render(context)

