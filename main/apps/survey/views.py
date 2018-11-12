from django.shortcuts import render, redirect
import random, string

def index(request):
	return render(request, 'survey/index.html')

def survey(request):
	if request.method == 'POST':
		if 'num' in request.session:
			request.session['num'] = request.session['num'] + 1
		else:
			request.session['num'] = 1
		request.session['name'] = request.POST['name']
		request.session['location'] = request.POST['location']
		request.session['language'] = request.POST['language']
		request.session['comment'] = request.POST['comment']
		return redirect('/result')
	else:
		return redirect('/')

def result(request):
	return render(request, 'survey/result.html')