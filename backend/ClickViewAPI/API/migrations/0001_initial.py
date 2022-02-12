# Generated by Django 4.0.2 on 2022-02-11 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('videoID', models.IntegerField()),
                ('name', models.CharField(max_length=200)),
                ('duration', models.IntegerField()),
                ('description', models.CharField(max_length=1000)),
                ('dateCreated', models.DateField(default='2022-02-11', max_length=100)),
                ('thumbnail', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='PlayList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('playlistID', models.IntegerField()),
                ('name', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=1000)),
                ('dateCreated', models.DateField(default='2022-02-11', max_length=100)),
                ('videos', models.ManyToManyField(blank=True, default='', to='API.Video')),
            ],
        ),
    ]
