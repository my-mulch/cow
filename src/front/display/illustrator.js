export default class Illustrator {

    /**
     *  Draws the contents of a Pod
     *
     * @memberof Illustrator
     */

    static drawWithScene(scene) {
        return async function (pod) {
            while (data = await pod.getData())
                scene.context.fillRect(...data.slice(0, 2), 25, 25)
        }
    }
}
