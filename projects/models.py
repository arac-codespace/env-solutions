from django.db import models
from django.utils.text import slugify

# Create your models here.


class Industry(models.Model):
    name = models.CharField(max_length=35)

    class Meta:
        verbose_name = "Industry"
        verbose_name_plural = "Industries"

    def __str__(self):
        return self.name

    def get_file_name(self):
        return self.name.replace(" ", "_").lower() + ".svg"


class Project(models.Model):
    # CharField max_length is requried
    # Charfield blank and true defaul is set to false
    title = models.CharField(max_length=120)
    location = models.CharField(max_length=120)
    industry = models.ManyToManyField(Industry)
    client = models.CharField(max_length=120)
    description = models.TextField()
    # ADD gallery?
    # default SlufField max_length = 50
    slug = models.SlugField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    # This is a human-readable string representation of the model
    # Basically when python does str(object) the following method
    # will return the title of the associated object record
    # and not a memmory address.  Used in admin, when the app
    # lists the objects of a particular model.
    def __str__(self):
        return self.title

    def _get_slug(self):
        slug = slugify(self.title)
        return slug

    # https://fazle.me/auto-generating-unique-slug-in-django/
    # I will be using slugs to append visual candy to urls, but
    # I plan to use ids for true navigation for now.
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._get_slug()
        super().save()
