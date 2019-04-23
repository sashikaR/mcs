#!/usr/bin/env python2.7
import flask
from flask import request
from flask import Flask, jsonify, Response 
from apiJson import getJsonValues

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/home', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"




@app.route('/matrix/p', methods=['POST'])
def matrix():
	content = request.get_json()
	response = getJsonValues(content)
	return Response (response, mimetype="application/json")

app.run()
