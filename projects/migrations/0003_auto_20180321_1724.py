# Generated by Django 2.0.3 on 2018-03-21 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20180321_1719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='slug',
            field=models.SlugField(editable=False, max_length=120),
        ),
    ]
