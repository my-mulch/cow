
from flask import Flask
from flask_socketio import SocketIO, emit
from server.actions import action_list, run

app = Flask(__name__)
socketio = SocketIO(app)

for action in action_list:
    socketio.on(action.name)(run(action, emit))
