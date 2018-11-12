from flask import Flask, render_template, request, redirect, session, flash
import re, sys
app = Flask(__name__)
app.secret_key = 'MyUnguessableSuperSecretKey'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/survey', methods=['POST'])
def get_survey():
	error = False
	first = request.form['first']
	if (len(first) == 0):
		error = True
		flash('First Name field cannot be empty!')
	elif not first.isalpha():
		error = True
		flash('First Name can only contain upper or lower case characters!')
	last = request.form['last']
	if (len(last) == 0):
		error = True
		flash('Last Name field cannot be empty!')
	elif not last.isalpha():
		error = True
		flash('Last Name can only contain upper or lower case characters!')
	email = request.form['email']
	if len(email) == 0:
		error = True
		flash('Email Address field cannot be empty!')
	elif not EMAIL_REGEX.match(email):
		error = True
		flash('Email address entered is invalid!')

	password = request.form['password']
	if len(password) < 8:
		error = True
		flash('Password cannot be less than eight characters long!')
	checkcap = False
	for i in xrange(ord('A'), ord('Z') + 1):
		if password.find(chr(i)) != -1:
			checkcap = True
			break
	if not checkcap:
		error = True;
		flash('Password must have at least one capital letter!')
	checkdig = False
	for i in xrange(ord('0'), ord('9') + 1):
		if password.find(chr(i)) != -1:
			checkdig = True
	if not checkdig:
		error = True
		flash('Password must have at least one number!')

	confirm = request.form['confirm']
	if confirm != password:
		error = True
		flash('Confirm Password must be identical to password!')
	if error:
		return render_template('index.html')
	else:
		flash('Thank you for submitting your information.')
		return render_template('index.html')

app.run(debug=True)