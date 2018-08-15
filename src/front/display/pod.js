import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.origin = props.origin || nd.array([0, 0, 0, 1])
        this.ndata = props.data || null
        this.data = this.ndata.toGenerator() || null
        this.animationPause = 0
    }

    static createFromSocketMessage(socketMessage) {
        return new Pod({
            data: nd.array(JSON.parse(socketMessage.data)),
        })
    }

    executor(resolve) {
        setTimeout(resolve, this.animationPause, this.data.next().value)
    }

    step() {
        return new Promise(this.executor.bind(this))
    }

    async render(scene, data = null) {

        // FOR POINT DATA
        // while (data = await this.step())
        //     scene.context.fillRect(...data.slice(0, 2), 1, 1)

        const clampedImage = new Uint8ClampedArray(this.ndata.data)
        const imageData = new ImageData(clampedImage, 645, 363)
        const imageBitmap = await createImageBitmap(imageData)

        scene.context.drawImage(imageBitmap, 0, 0)
    }
}
