# Generated by Django 2.0.3 on 2018-03-22 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0007_remove_project_num'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=120),
        ),
    ]
