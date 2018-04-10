from django.urls import path
from projects import views

urlpatterns = [
    path('', views.projects, name="projects"),
    path('api/', views.ApiBrowse.as_view()),
    path('api/<int:pk>/', views.ApiInfo.as_view()),
    path('api/industry/<industry_name>/', views.IndustryFilter.as_view())
]
