import numpy as np
import json


def load_shape(shape_raw):
    shape = json.loads(shape_raw)
    coordinates = [vertex['coordinates'] for vertex in shape['vertices']]

    return np.array(coordinates)
