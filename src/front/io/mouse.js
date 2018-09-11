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
        this.isPressed = true

        for (const pod of this.scene.pods)
            if (pod.isWithin(clickEvent)) {
                this.selectedPod = pod
                break
            }
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
