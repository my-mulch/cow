from flask import Flask
from flask_socketio import SocketIO, emit

from loader.parse import load_shape
from transforms.rotate import rotX, rotY, rotZ
from transforms.translate import translate

import numpy as np

app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def index():
    return "{}".format(10 ** 2)


@socketio.on('rotateX')
def rotate(shape_raw):
    shape = load_shape(shape_raw)
    x, y, z, _ = np.mean(shape[:, :-1], axis=0)
    t_origin = translate(-x, -y, -z)
    t_initial = np.linalg.inv(t_origin)
    rotX_in_place = t_initial.dot(rotX.dot(t_origin))
    
