
from system.core.controller import *

class Products(Controller):
    def __init__(self, action):
        super(Products, self).__init__(action)
        self.load_model('Product')
        self.db = self._app.db
   
    def index(self):
        return self.load_view('index.html', products=self.models['Product'].get_all())

    def show(self, id):
        product = self.models['Product'].get_by_id(id)
        return self.load_view('show.html', product=product[0])

    def edit(self, id):
        product = self.models['Product'].get_by_id(id)
        return self.load_view('edit.html', product=product[0])

    def remove(self, id):
        self.models['Product'].delete(id)
        return redirect('/')

    def new(self):
        return self.load_view('new.html')

    def create(self):
        product = {'name':request.form['name'], 'description':request.form['desc'],
                    'price':request.form['price']}
        self.models['Product'].add(product)
        return redirect('/')

    def update(self, id):
        product = {'id':id, 'name':request.form['name'],
                    'description':request.form['desc'], 'price':request.form['price']}
        self.models['Product'].update(product)
        return redirect('/')
