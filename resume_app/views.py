from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request ,'home.html')

def resume(request):
    return render(request, 'resume.html')

def project(request):
    return render(request, 'project.html')