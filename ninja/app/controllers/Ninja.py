"""
    Sample Controller File

    A Controller should be in charge of responding to a request.
    Load models to interact with the database and load views to render them to the client.

    Create a controller using this template
"""
from system.core.controller import *
import random, datetime

class Ninja(Controller):
    def __init__(self, action):
        super(Ninja, self).__init__(action)
        """
            This is an example of loading a model.
            Every controller has access to the load_model method.
        """
        self.load_model('WelcomeModel')
        self.db = self._app.db

        """
        
        This is an example of a controller method that will load a view for the client 

        """
   
    def index(self):
        if not 'gold' in session.keys():
            session['gold'] = 0
        if not 'html' in session.keys():
            session['html'] = ''
        return self.load_view('index.html', gold=session['gold'], html=session['html'])

    def process(self):
        if request.form['place'] == 'farm':
            gold = random.randrange(10,21)
            session['gold'] += gold
            html = '<p style="color:green;">Earned ' + str(gold) + ' gold from the Farm!'
        elif request.form['place'] == 'cave':
            gold = random.randrange(5,11)
            session['gold'] += gold
            html = '<p style="color:green;">Earned ' + str(gold) + ' gold from the Cave!'
        elif request.form['place'] == 'house':
            gold = random.randrange(2,6)
            session['gold'] += gold
            html = '<p style="color:green;">Earned ' + str(gold)+ ' gold from the House!'
        elif request.form['place'] == 'casino':
            gold = random.randrange(-50,51)
            session['gold'] += gold
            if gold > 0:
                html = '<p style="color:green;">Entered a Casino and Won ' \
                        + str(gold) + ' gold. YAY!'
            elif gold == 0:
                html ='<p style="color:green;">Entered a Casino and didn\'t win or lose.'
            else:
                html = '<p style="color:red;">Entered a Casino and Lost ' \
                        + str(gold * -1) + ' gold. Ouch!'
        now = datetime.datetime.now()
        now.strftime("%Y-%m-%d %H:%M")
        html += ' (' + now.strftime("%Y-%m-%d %H:%M") + ')</p>'
        session['html'] += html
        return redirect('/')

