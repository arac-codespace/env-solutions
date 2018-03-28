from django.shortcuts import render
from .models import Project, Industry

# Create your views here.


def projects(request):

    projects = Project.objects.all()
    industries = Industry.objects.all()

    context = {
        "loop_times": range(6),
        "projects": projects,
        "industries": industries
    }
    return render(request, 'projects/projects.html', context)
