# Generated by Django 2.0.3 on 2018-03-22 06:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20180322_0157'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='update',
            new_name='updated',
        ),
    ]
