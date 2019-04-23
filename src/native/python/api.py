#!/usr/bin/env python2.7
import flask
from flask import request
from flask import Flask, jsonify, Response 
from apiJson import getJsonValues,getJsonValuesFromSingleProcesser

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/home', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"


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

app.run()
