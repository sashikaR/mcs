#!/usr/bin/env python2.7
import flask
import time
from flask import request
from flask import Flask, jsonify, Response 
from apiJson import getJsonValues,getJsonValuesFromSingleProcesser
from multiprocessing import Pool
from flask import Flask

app = Flask(__name__)
_pool = None


def matrix_function(content):
	response = getJsonValuesFromSingleProcesser(content)
	return response
	

@app.route('/matrix/pp', methods=['POST'])
def route_expcalc():
	content = request.get_json()
        f = _pool.apply_async(matrix_function,[content])
        response = f.get(timeout=2)
        return Response (response, mimetype="application/json")

if __name__=='__main__':
        _pool = Pool(processes=4)
        try:
                # insert production server deployment code
                app.run()
        except KeyboardInterrupt:
                _pool.close()
                _pool.join()
