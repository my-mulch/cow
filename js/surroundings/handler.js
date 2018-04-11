

class Handler {
    constructor(scene, keyboard, mouse) {
        this.scene = scene
        this.keyboard = keyboard
        this.mouse = mouse

        this.actions = {
            // Translation
            "ArrowUp,Shift": TRANSLATION.parametrize(0, -2, 0),
            "ArrowRight,ArrowUp,Shift": TRANSLATION.parametrize(2, -2, 0),
            "ArrowRight,Shift": TRANSLATION.parametrize(2, 0, 0),
            "ArrowDown,ArrowRight,Shift": TRANSLATION.parametrize(2, 2, 0),
            "ArrowDown,Shift": TRANSLATION.parametrize(0, 2, 0),
            "ArrowDown,ArrowLeft,Shift": TRANSLATION.parametrize(-2, 2, 0),
            "ArrowLeft,Shift": TRANSLATION.parametrize(-2, 0, 0),
            "ArrowLeft,ArrowUp,Shift": TRANSLATION.parametrize(-2, -2, 0),

            // Rotation
            "ArrowUp,r": ROTATION.X.parametrize(Math.PI / 1024, Math.PI / 1024, Math.PI / 1024, Math.PI / 1024),
            "ArrowDown,r": ROTATION.X.parametrize(-Math.PI / 1024, -Math.PI / 1024, -Math.PI / 1024, - Math.PI / 1024),
            "ArrowLeft,r": ROTATION.Y.parametrize(Math.PI / 1024, Math.PI / 1024, Math.PI / 1024, Math.PI / 1024),
            "ArrowRight,r": ROTATION.Y.parametrize(-Math.PI / 1024, -Math.PI / 1024, -Math.PI / 1024, - Math.PI / 1024),

            // Scale
            "ArrowUp,s": SCALE.parametrize(1, 1.01, 1),
            // "ArrowRight,ArrowUp,s": SCALE.parametrize(1, -1, 1),
            "ArrowRight,s": SCALE.parametrize(1.01, 1, 1),

            "t": SCALE.parametrize(1, 1, 1.01),
            // "ArrowDown,ArrowRight,s": SCALE.parametrize(1, 1, 1),
            // "ArrowDown,s": SCALE.parametrize(1, 1, 1),
            // "ArrowDown,ArrowLeft,s": SCALE.parametrize(-1, 1, 1),
            // "ArrowLeft,s": SCALE.parametrize(-1, 1, 1),
            // "ArrowLeft,ArrowUp,s": SCALE.parametrize(-1, -1, 1),



        }

        window.setInterval(this.run.bind(this))
    }

    run() {
        const pressedKeys = Array.from(this.keyboard.pressedKeys)
        const transform = this.actions[pressedKeys.sort().toString()]

        this.scene.transform = transform

        if (transform)
            this.scene.render(transform)


    }


}