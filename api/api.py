import time
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/time')
@cross_origin()
def get_current_time():
    res = {'time': time.time()}
    return jsonify(res)
