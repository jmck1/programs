from django.shortcuts import render, HttpResponse

def index(request):
	response = "YO YO MAMA!"
	return HttpResponse(response)
