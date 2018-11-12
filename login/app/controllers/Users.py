"""
    Sample Controller File

    A Controller should be in charge of responding to a request.
    Load models to interact with the database and load views to render them to the client.

    Create a controller using this template
"""
from system.core.controller import *

class Users(Controller):
    def __init__(self, action):
        super(Users, self).__init__(action)
        self.load_model('User')
        self.db = self._app.db
   
    def index(self):
        return self.load_view('index.html')

    def create(self):
        user = {'firstname':request.form['first'], 'lastname':request.form['last'],
                'email':request.form['email'], 'password':request.form['password'],
                'confirm':request.form['confirm']}
        print user
        if self.models['User'].add_user(user):
            return self.load_view('success.html', name=user['firstname'])
        else:
            return redirect('/')

    def login(self):
        if self.models['User'].login_user(request.form['email'],
                                            request.form['password']):
            return self.load_view('success.html')
        else:
            return redirect('/')
