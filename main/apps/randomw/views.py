from django.shortcuts import render, redirect
import random, string

def index(request):
	return render(request, 'randomw/index.html')

def randomw(request):
	if request.method == 'POST':
		if 'num' in request.session:
			request.session['num'] = request.session['num'] + 1
		else:
			request.session['num'] = 1
		request.session['rand'] = ''.join(random.sample(string.ascii_uppercase, 14))
		return redirect('/')
	else:
		return redirect('/')
