from rest_framework import serializers
from . import models


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'location',
            'industry',
            'client',
            'description',
        )
        model = models.Project
