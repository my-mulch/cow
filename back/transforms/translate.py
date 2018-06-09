import numpy as np


def translate(x, y, z):
    return np.array([
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
    ])


def translate_to_origin_and_back(shape):
    # assumes 4d coordinates lying flat
    x, y, z = np.mean(shape[:, :-1], axis=0)

    origin = translate(-x, -y, -z)
    back = np.linalg.inv(origin)

    return origin, back
