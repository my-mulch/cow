export default class Illustrator {

    /**
     *  Draws the contents of a Pod
     *
     * @memberof Illustrator
     */

    static drawWithScene(scene) {
        return function (pod) {
            while (data = pod.getData())
                scene.context.fillRect(...data.slice(0, 2), 1, 1)
        }
    }
}
