from transforms.rotate import rotX, rotate_in_place
from loader.parse import load_scene
import numpy as np


class Action():
    def __init__(self, name, handler):
        self.name = name
        self.handler = handler


action_list = [
    Action('rotateX', ),
    Action('rotateY', ),
    Action('rotateZ', ),
]


def run(action, send_to_front_end):
    return """ 
    a function that takes in the data from the front end, processes it,
    then calls emit with that transformed result
    """

    def deploy(self, action, socket_action):
        def rotate(json_scene):
            scene = load_scene(json_scene)

            for shape in scene:
                shape['vertices'] = rotate_in_place(
                    np.array(shape['vertices']), rotX).tolist()

            socket_action(action, scene)

        return rotate
