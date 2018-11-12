"""
    Sample Controller File

    A Controller should be in charge of responding to a request.
    Load models to interact with the database and load views to render them to the client.

    Create a controller using this template
"""
from system.core.controller import *

class Courses(Controller):
    def __init__(self, action):
        super(Courses, self).__init__(action)
        """
            This is an example of loading a model.
            Every controller has access to the load_model method.
        """
        self.load_model('Course')
        # self.db = self._app.db

        """
        
        This is an example of a controller method that will load a view for the client 

        """
   
    def index(self):
        return self.load_view('index.html',
                    courses=self.models['Course'].get_all_courses())

    def add(self):
        di = {'title':request.form['name'], 'description':request.form['desc']}
        self.models['Course'].add_course(di)
        return redirect('/')

    def remove(self, id):
        course = self.models['Course'].get_course_by_id(id)
        return self.load_view('remove.html', course=course[0])

    def delete(self, id):
        self.models['Course'].delete_course(id)
        return redirect('/')