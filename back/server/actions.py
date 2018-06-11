from loader.parse import load_scene


class Action():
    def __init__(self, name, handler):
        self.name = name
        self.handler = handler


action_list = [
    Action('rotateX', rotX_in_place),
    Action('rotateY', rotY_in_place),
    Action('rotateZ', rotZ_in_place),
]


def deploy(action, send_processed_scene_to_front_end):
    def runner(json_scene):
        scene = load_scene(json_scene)

        send_processed_scene_to_front_end(
            action.name,
            [action.handler(shape) for shape in scene]
        )

    return runner
