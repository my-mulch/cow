from flask import Flask
from flask_socketio import SocketIO, emit

from loader.parse import load_scene
from transforms.rotate import rotX, rotY, rotZ
from transforms.translate import translate

app = Flask(__name__)
socketio = SocketIO(app)


@socketio.on('rotateX')
def rotateX(json_scene):
    scene = load_scene(json_scene)
    emit('rotateX', scene)
    # x, y, z = np.mean(shape[:, :-1], axis=0)
    # t_origin = translate(-x, -y, -z)
    # t_initial = np.linalg.inv(t_origin)

    # rotX_in_place = t_initial.dot(rotX(np.pi / 1024).dot(t_origin))

    # print(json.dumps(shape.dot(rotX_in_place.T).tolist()))
