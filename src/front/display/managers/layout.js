import nd from 'multi-dim'

export default class LayoutManager {

    /**
     * Creates an instance of LayoutManager.
     * @param {*} layout
     *  origin: ndarray
     *  size: object
     * @memberof LayoutManager
     */

    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size
    }

    /**
     * Locates the incoming ndArray within the current Layout
     *
     * @param {ndArray} point
     * @returns The transformed point
     * @memberof LayoutManager
     */

    locate(point) {
        return this.origin.add(point)
    }
}

LayoutManager.DEFAULT_LAYOUT = {
    origin: nd.array([100, 150, 0]),
    size: { X: 250, Y: 250, Z: 250 }
}
