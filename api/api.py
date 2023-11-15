from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
import os
import configparser

app = Flask(__name__)
CORS(app)

config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join(".ini")))

app.config['DEBUG'] = True
app.config['MONGO_URI'] = 'mongodb+srv://s395276:933662BeanMONGO@skkunite.iuppwye.mongodb.net/data?retryWrites=true&w=majority'


mongo = PyMongo(app)
db = mongo.db

def test(db):
    collection = db.friends
    cursor = collection.find({})
    for document in cursor:
        print(document)

test(db)

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
