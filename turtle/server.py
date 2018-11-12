from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/ninja')
def ninja1():
	return render_template("ninja.html", color='all')

@app.route('/ninja/<color>')
def ninja(color):
	if len(color) == 0:
		color = 'all'
	elif color == 'all':
		color = 'bogus'
	return render_template("ninja.html", color=color)
	
app.run(debug=True)