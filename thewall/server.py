from flask import Flask, render_template, request, redirect, session, flash
import re, sys
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'thewalldb')
app.secret_key = 'MyUnguessableSuperSecretKey'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/regis', methods=['POST'])
def regis():
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
		pw_hash = bcrypt.generate_password_hash(password)
		query ='''
			INSERT INTO users (firstname, lastname, email, password, created, updated)
			VALUES (:firstname, :lastname, :email, :password, NOW(), NOW())
			'''
		data = {'firstname':first, 'lastname':last, 'email': email, 'password': pw_hash}
		mysql.query_db(query, data)

		query = "SELECT * FROM users WHERE email = :email"
		data = {'email':email}
		user = mysql.query_db(query, data)
		session['id'] = user[0]['id']
		session['firstname'] = user[0]['firstname']
		session['lastname'] = user[0]['lastname']

		return redirect('/wall')

@app.route('/login', methods=['POST'])
def login():
	email = request.form['email']
	password = request.form['password']
	query = "SELECT * FROM users WHERE email = :email"
	data = {'email':email}
	user = mysql.query_db(query, data)

	if bcrypt.check_password_hash(user[0]['password'], password):
		session['id'] = user[0]['id']
		session['firstname'] = user[0]['firstname']
		session['lastname'] = user[0]['lastname']
		return redirect('/wall')
	else:
		flash('Password Entered did NOT Match Account with Email ' + email + '!')
		return redirect('/')

@app.route('/wall')
def wall():
	if not 'id' in session:
		return redirect('/')

	query = '''SELECT messages.id, messages.message, messages.created,
					  users.firstname, users.lastname
		       FROM messages JOIN users ON users.id = messages.users_id
		       ORDER BY messages.created DESC'''
	mess = mysql.query_db(query)
	query = '''SELECT comments.comment, comments.messages_id, comments.created,
					  users.firstname, users.lastname
		       FROM comments JOIN users ON users.id = comments.users_id
		       ORDER BY comments.created ASC'''
	comm1 = mysql.query_db(query)

	comm = []
	for i in xrange(len(mess)):
		comm.append([])
		for j in comm1:
			if mess[i]['id'] == j['messages_id']:
				comm[i].append(j)
	return render_template("wall.html", mess=mess, comm=comm,
					firstname=session['firstname'], lastname=session['lastname'])

@app.route('/postm', methods=['POST'])
def postm():
	text = request.form['text']
	query ='''INSERT INTO messages (message, users_id, created, updated)
			  VALUES (:message, :users_id, NOW(), NOW())'''
	data = {'message':text, 'users_id':session['id']}
	mysql.query_db(query, data)
	return redirect('/wall')

@app.route('/postc/<id1>', methods=['POST'])
def postc(id1):
	text = request.form['text']
	query ='''INSERT INTO comments (comment, users_id, messages_id, created, updated)
			  VALUES (:comment, :users_id, :messages_id, NOW(), NOW())'''
	data = {'comment':text, 'users_id':session['id'], 'messages_id':id1}
	mysql.query_db(query, data)
	return redirect('/wall')

@app.route('/delete')
def delete():
	if ('id' in session):
		session.pop('id')
	if ('firstname' in session):
		session.pop('firstname')
	if ('lastname' in session):
		session.pop('lastname')
	return redirect('/')

app.run(debug=True)