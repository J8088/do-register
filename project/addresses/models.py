from django.db import models


# Create your models here.

class Address(models.Model):
    """
    """
    name = models.CharField(max_length=100, default=None)
    url_field = models.URLField(max_length=1000)
    status = models.IntegerField()
    checked_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
