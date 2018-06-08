import numpy as np


def center_and_back(coordinates):
    x, y, z, _ = np.mean(coordinates[:, :-1], axis=1)

    center = np.array([
        [1, 0, 0, -x],
        [0, 1, 0, -y],
        [0, 0, 1, -z],
        [0, 0, 0, 1]
    ])

    return center, np.linalg.inv(center)



