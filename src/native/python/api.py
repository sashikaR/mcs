#!/usr/bin/env python2.7
import flask
import time
from flask import request
from flask import Flask, jsonify, Response 
from apiJson import getJsonValues,getJsonValuesFromSingleProcesser

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/home', methods=['GET'])
def home():
    time.sleep(1)
    message ='{"Response":"SUCCESS"}'
    return Response (message, mimetype="application/json")


@app.route('/matrix/s', methods=['POST'])
def matrix_single():
	content = request.get_json()
	response = getJsonValuesFromSingleProcesser(content)
	return Response (response, mimetype="application/json")

@app.route('/matrix/p', methods=['POST'])
def matrix_parallel():
	content = request.get_json()
	response = getJsonValues(content)
	return Response (response, mimetype="application/json")

#app.run()
if __name__ == '__main__':
    app.run(host='localhost',port=5000,threaded=True)
