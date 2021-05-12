import os
import json
from flask import Flask, jsonify

app = Flask(__name__)

iptables = json.loads(open('static/iptables.json').read())


@app.route('/')
def main():
    # Currently only serves the following string at http://localhost:5000 
    # Once the FrontEnd is finished, we can build it and serve it with the following
    # instructions: https://flask.palletsprojects.com/en/1.1.x/patterns/singlepageapplications/
    
    return "Placeholder for static frontend build!"

@app.route('/api/all')
def method_name():
   # Dummy API, serves the JSON dump found in the static directory. It needs to be
   # re-serialized with the jsonify function in order to be served on the http://localhost:5000/api/all
   # endpoint. 
   
    return jsonify(iptables)

if __name__ == '__main__':
   app.run(debug = True)