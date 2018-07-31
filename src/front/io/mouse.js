
export default class Mouse {
    constructor(context = window) {
        this.context = context

        this.context.addEventListener('mousedown', function (mouseEvent) { })
        this.context.addEventListener('mouseup', function (mouseEvent) { })
        this.context.addEventListener('mousemove', function (event) { })
    }
}
