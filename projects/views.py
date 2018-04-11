
from rest_framework import generics

from . import models
from . import serializers

from django.shortcuts import render
# from .models import Project, Industry

# Create your views here.


def projects(request):

    projects = models.Project.objects.all()
    industries = models.Industry.objects.all()

    context = {
        "loop_times": range(6),
        "projects": projects,
        "industries": industries
    }
    return render(request, 'projects/projects.html', context)


class ApiBrowse(generics.ListCreateAPIView):
    queryset = models.Project.objects.all().order_by('-created_at')
    serializer_class = serializers.ProjectSerializer


class ApiInfo(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer


class IndustryFilter(generics.ListAPIView):
    serializer_class = serializers.ProjectSerializer

    def get_queryset(self):
        industry = self.kwargs['industry_name']

        """
        First look for industry_name id, then use the id to filter projects
        """
        industry_id = models.Industry.objects.filter(name=industry).get().id
        queryset = models.Project.objects.filter(industry=industry_id)
        # return models.Project.objects.filter(industry=industry)
        return queryset
