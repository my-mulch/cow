from flask import Flask
from flask_socketio import SocketIO, emit

from utils.parse import load_shape

app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def index():
    return "{}".format(10 ** 2)


@socketio.on('rotateX')
def rotate(shape_raw):
    shape = load_shape(shape_raw)
    
