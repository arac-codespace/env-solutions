from django.contrib import admin

# Register your models here.
# Btw,  we can use .models bc
# we're in the same module

from .forms import ProjectForm
from .models import Project, Industry

# Here we use readonly_fields option to create
# a read only slug field in the admin interface


class ProjectAdmin(admin.ModelAdmin):
    list_display = ['id', '__str__', 'location',
                    'created_at', 'updated']

    # Point to a ModelForm for custom administration forms...
    # /forms.py
    form = ProjectForm
    readonly_fields = ('slug',)


admin.site.register(Project, ProjectAdmin)
admin.site.register(Industry)
