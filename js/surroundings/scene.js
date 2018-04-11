class Scene {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
        
        this.eventHandler = new EventHandler()
        this.keyBoard = new KeyBoard(window)
        this.mouse = new Mouse(window)

        this.render = this.render.bind(this)
    }

}
