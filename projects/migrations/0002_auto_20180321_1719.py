# Generated by Django 2.0.3 on 2018-03-21 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='slug',
            field=models.SlugField(max_length=120),
        ),
    ]
