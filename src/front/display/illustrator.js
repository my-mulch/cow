export default class Illustrator {

    static async draw(scene, pods) {
        let pod, data

        while (pod = pods.pop())
            while (data = await pod.step())
                scene.context.fillRect(...data.slice(0, 2), 1, 1)
    }
}
