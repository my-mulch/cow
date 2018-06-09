import numpy as np
import json


def load_scene(json_scene):
    scene = json.loads(json_scene)
    print(scene)
    # coordinates = [vertex['coordinates'] for vertex in shape['vertices']]

    # return np.array(coordinates)
