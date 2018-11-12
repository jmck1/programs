class Animal(object):
	def __init__(self, name, health=100):
		self.name = name
		self.health = health
	def walk(self):
		self.health -= 1
		return self
	def run(self):
		self.health -= 5
		return self
	def displayhealth(self):
		print 'Name: ' + self.name + ', Health: ' + str(self.health) + '.'
		return self

class Dog(Animal):
	def __init__(self, name):
		super(Dog, self).__init__(name, 150)
	def pet(self):
		self.health += 5
		return self

class Dragon(Animal):
	def __init__(self, name):
		super(Dragon, self).__init__(name, 170)
	def fly(self):
		self.health -= 10
		return self
	def displayhealth(self):
		print 'This is a Dragon!'
		super(Dragon, self).displayhealth()

gen = Animal('Generic')
gen.walk().walk().walk().run().run().displayhealth()
dog = Dog('Spot')
dog.walk().walk().walk().run().run().pet().displayhealth()
drag = Dragon('Smaug')
drag.walk().walk().walk().run().run().fly().fly().displayhealth()
gen.fly()