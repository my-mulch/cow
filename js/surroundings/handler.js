

class Handler {
    constructor(scene, keyboard, mouse) {
        this.scene = scene
        this.keyboard = keyboard
        this.mouse = mouse

        this.actions = {
            "ArrowLeft,Shift": TRANSLATION.parametrize(0, -1, 0),
            "ArrowRight,Shift": TRANSLATION.parametrize(0, 1, 0),
            "ArrowUp,Shift": TRANSLATION.parametrize(-1, 0, 0),
            "ArrowDown,Shift": TRANSLATION.parametrize(1, 0, 0),
        }

        window.setInterval(this.run.bind(this))
    }

    run() {
        const pressedKeys = Array.from(this.keyboard.pressedKeys)
        const transform = this.actions[pressedKeys.sort().toString()]

        this.scene.transform = transform
        this.scene.render()
    }


}