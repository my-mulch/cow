import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.downTime = props.downTime || 0
        this.height = props.height || 200
        this.width = props.width || 200
        this.depth = props.depth || 200
        this.origin = props.origin || nd.array([0, 0, 0, 1])
        this.data = props.data.toGenerator() || null
    }

    static createFrom(socketMessage) {
        return new Pod({
            data: nd.array(JSON.parse(socketMessage.data)),
        })
    }

    executor(resolve) {
        setTimeout(resolve, this.downTime, this.data.next().value)
    }

    step() {
        return new Promise(this.executor.bind(this))
    }

    async render(scene, data = null) {
        while (data = await this.step())
            scene.context.fillRect(...data.slice(0, 2), 1, 1)
    }
}
