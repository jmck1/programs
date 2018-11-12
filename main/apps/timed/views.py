from django.shortcuts import render
import datetime

def index(request):
	now = datetime.datetime.now()
	context = {'month':now.strftime('%B'), 'day':now.strftime('%d'), 'year':str(now.year),
				'time':now.strftime('%I:%m %p')}
	return render(request, 'timed/index.html', context)
