# IPtables Dashboard 2.0

An updated version of an unpublished repo, using Vue and Chart.JS to produce a functional SPA web-gui for charting iptables. A simplistic Flask backend is included only to serve the JSON data for charts.

## 1 Dependencies

Requires Python 3 for the Flask dummy backend and a running install of NodeJS[https://nodejs.org/en/] 12+ to build the static frontend files. For specific packages, see requirements.txt and package.json.

### Pip dependencies: (requirements.txt)

* Flask

### NPM dependencies: (package.json)

* Vue
* Vue-Axios
* Chart.js

## 2 Installation

Currently, the Frontend is not built. Once finished, a standard /dist build with minified static files will be available, at which point you can direct app.py to serve frontend/dist/index.html. To run the dev server, follow these instructions.

1. Activate a venv (python3-venv) and install all packages in requirements.txt (`sudo pip install -r requirements.txt`)
2. Launch the dummy backend with either `flask run` or simply `python3 app.py`
3. Start a new terminal and cd into the frontend directory.
4. Use the npm `npm run serve` command from the Vue CLI to compile and launch the dev sever.

Troubleshooting: If you're having trouble accessing the dummy API from the frontend, make sure the app is served on port 5000. If 5000 is unavailable, adjust the Flask APIs port and then adjust vue.config.js
