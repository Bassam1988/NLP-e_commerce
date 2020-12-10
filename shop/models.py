from django.db import models

# Create your models here.
from django.contrib.auth.models import User

# Register your models here.


class MainCategory(models.Model):
    name = models.CharField(max_length=30)


class SubCategory(models.Model):
    name = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name


class Address(models.Model):
    country = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    region = models.CharField(max_length=30)
    Address = models.CharField(max_length=200)
    google_map = models.CharField(max_length=100)

    def __str__(self):
        return self.country


class Product(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    m_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=30)
    price = models.FloatField(default=0.00)
    description = models.CharField(max_length=1500)
    img = models.CharField(max_length=30, default='./img/avatar.jpg')
    vedio = models.CharField(max_length=30, blank=True)
    s_categories = models.ManyToManyField(SubCategory, blank=False, related_name="products")
    other_s_category = models.CharField(max_length=30, blank=True, null=True)
    addresses = models.ManyToManyField(Address, blank=False, related_name="products")

    def __str__(self):
        return self.name


class Query(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    done = models.BooleanField()

    def __str__(self):
        return self.description


class NotificationCategory(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Notification(models.Model):
    note_category = models.ForeignKey(NotificationCategory, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    done = models.BooleanField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    showedByUsers = models.ManyToManyField(
        User, blank=True, related_name="notifications")
    
    def __str__(self):
        return self.description