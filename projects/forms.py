from django import forms

from .models import Project


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['title', 'industry', 'location',
                  'client', 'description', 'isFeatured', 'slug']
        labels = {
            'isFeatured': ('Featured?'),
        }

        help_texts = {
            'isFeatured': ('Used to populate the "featured" filter.'),
        }