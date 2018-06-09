from transforms.translate import translate_to_origin_and_back

import numpy as np


def rotX(theta):
    c = np.cos(theta)
    s = np.sin(theta)

    return np.array([
        [1, 0, 0, 0],
        [0, c, -s, 0],
        [0, s, c, 0],
        [0, 0, 0, 1]
    ])


def rotY(theta):
    c = np.cos(theta)
    s = np.sin(theta)

    return np.array([
        [c, 0, s, 0],
        [0, 1, 0, 0],
        [-s, 0, c, 0],
        [0, 0, 0, 1]
    ])


def rotZ(theta):
    c = np.cos(theta)
    s = np.sin(theta)

    return np.array([
        [c, -s, 0, 0],
        [s, c, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ])


def rotate_in_place(shape, rot_temp):
    rotator = rot_temp(np.pi / 1024)
    to_origin, back = translate_to_origin_and_back(shape)
    

    # rotX_in_place = t_initial.dot(rotX(np.pi / 1024).dot(t_origin))

    # print(json.dumps(shape.dot(rotX_in_place.T).tolist()))
