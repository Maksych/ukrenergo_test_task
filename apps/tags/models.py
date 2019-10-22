from django.db import models


class PageTags(models.Model):
    url = models.URLField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    data = models.TextField()
    
    def __str__(self):
        return self.url
