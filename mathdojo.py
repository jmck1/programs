class Mathdojo(object):
	def __init__(self, result=0):
		self.result = result
	def add(self, val, *vals):
		if type(val) == type(0):
			self.result += val
		else:
			for i in val:
				self.result += i
		for i in vals:
			if type(i) == type(0):
				self.result += i
			else:
				for j in i:
					self.result += j
		return self
	def subtract(self, val, *vals):
		if type(val) == type(0):
			self.result -= val
		else:
			for i in val:
				self.result -= i
		for i in vals:
			if type(i) == type(0):
				self.result -= i
			else:
				for j in i:
					self.result -= j
		return self

md = Mathdojo()
print md.result
print md.add(2).add(2,5).subtract(3,2).result
md1 = Mathdojo()
md1.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25])
print md1.subtract(2, [2,3], [1.1, 2.3]).add((1,2,3,), 4, [5,6,7]).result
