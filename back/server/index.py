from flask import Flask
from flask_socketio import SocketIO, emit

from loader.parse import load_shape
from transforms.rotate import rotX, rotY, rotZ
from transforms.translate import translate

import numpy as np
import json

app = Flask(__name__)
socketio = SocketIO(app)


@socketio.on('rotateX')
def rotate(shape_raw):
    print(shape_raw)
    # shape = load_shape(shape_raw)
    # x, y, z = np.mean(shape[:, :-1], axis=0)
    # t_origin = translate(-x, -y, -z)
    # t_initial = np.linalg.inv(t_origin)

    # rotX_in_place = t_initial.dot(rotX(np.pi / 1024).dot(t_origin))

    # print(json.dumps(shape.dot(rotX_in_place.T).tolist()))
