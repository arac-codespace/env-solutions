from django.shortcuts import render

# Create your views here.


def home(request):
    context = {
        "loop_times": range(3),
    }
    return render(request, 'home/home.html', context)
