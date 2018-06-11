from transforms.translate import translate_to_origin_and_back
from transforms.compose import compose

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
    rotator = rot_temp(np.pi / 128)
    to_origin, to_initial = translate_to_origin_and_back(shape)

    return shape.dot(compose(to_initial, rotator, to_origin).T)
