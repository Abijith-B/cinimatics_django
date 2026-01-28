
from django.shortcuts import render

def home(request):
    return render(request, "movies/index.html")


def login_page(request):
    return render(request, "movies/login.html")
