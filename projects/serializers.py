from rest_framework import serializers
from . import models


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'title',
            'location',
            'industry',
            'client',
            'description',
        )
        model = models.Project
