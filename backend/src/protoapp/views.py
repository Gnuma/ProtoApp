from django.shortcuts import render

def index(request):
    return HttpResponse("Hello world, I'm finally developing with Django!")
