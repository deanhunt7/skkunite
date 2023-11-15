from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    res = jsonify({'token': 'admin'})
    return res

@app.route('/quiz', methods=['POST'])
@cross_origin()
def quiz():
    res = jsonify({'token': 'admin'})
    return res