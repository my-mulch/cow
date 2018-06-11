from transforms.translate import translate_to_origin_and_back
from transforms.compose import compose

import numpy as np


def rotate_in_place(shape, axis_of_rotation):
    # hard coded angle -- eventually replace
    rotate = axis_of_rotation(np.pi / 32)
    move_to_origin, move_to_initial = translate_to_origin_and_back(shape)
    composition = compose(move_to_initial, rotate, move_to_origin).T
    shape['vertices'] = np.array(shape['vertices']).dot(composition).tolist()

    return shape


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


def rotX_in_place(shape):
    return rotate_in_place(shape, rotX)


def rotY_in_place(shape):
    return rotate_in_place(shape, rotY)


def rotZ_in_place(shape):
    return rotate_in_place(shape, rotZ)
