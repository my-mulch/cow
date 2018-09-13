export default class Mouse {
    constructor(scene) {
        this.scene = scene
        this.isPressed = false
        this.selectedPod = null

        this.scene.canvas.addEventListener('mousedown', this.clickDown.bind(this))
        this.scene.canvas.addEventListener('mouseup', this.clickUp.bind(this))
        this.scene.canvas.addEventListener('mousemove', this.move.bind(this))
    }

    clickDown(clickEvent) {
        console.log(clickEvent)
        // this.isPressed = true
        // this.selectedPod = this.scene.pods.filter(function (pod) {
        //     return pod.isWithin(clickEvent)
        // })
    }

    clickUp(event) {
        this.isPressed = false
        this.selectedPod = false
    }

    move(moveEvent) {
        if (this.selectedPod)
            this.selectedPod.move(moveEvent)
    }
}
