import nd from 'multi-dim'

export default class LayoutManager {
    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size
    }

    moveToOrigin(source) {


        return nd.array([
            [1, 0, 0, x],
            [0, 1, 0, y],
            [0, 0, 1, z],
            [0, 0, 0, 1],
        ])
    }
}


