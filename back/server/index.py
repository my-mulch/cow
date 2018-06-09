
from flask import Flask
from flask_socketio import SocketIO, emit

from loader.parse import load_scene
from transforms.rotate import rotX, rotY, rotZ, rotate_in_place

import numpy as np

app = Flask(__name__)
socketio = SocketIO(app)


@socketio.on('rotateX')
def rotateX(json_scene):
    scene = load_scene(json_scene)

    for shape in scene:
        shape['vertices'] = rotate_in_place(
            np.array(shape['vertices']), rotX).tolist()

    emit('rotateX', scene)


@socketio.on('rotateY')
def rotateY(json_scene):
    scene = load_scene(json_scene)

    for shape in scene:
        shape['vertices'] = rotate_in_place(
            np.array(shape['vertices']), rotY).tolist()

    emit('rotateY', scene)


@socketio.on('rotateZ')
def rotateZ(json_scene):
    scene = load_scene(json_scene)

    for shape in scene:
        shape['vertices'] = rotate_in_place(
            np.array(shape['vertices']), rotZ).tolist()

    emit('rotateZ', scene)
