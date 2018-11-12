from django.shortcuts import render, redirect
import random, string

def index(request):
	return render(request, 'ninja/index.html')

def ninjas(request):
	return render(request, 'ninja/ninjas.html')

def ninja(request, color):
	context = {'color':color}
	return render(request, 'ninja/ninja.html', context)