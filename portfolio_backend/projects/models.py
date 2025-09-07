from django.db import models

from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='project_images/',null=True,blank=True)
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title
