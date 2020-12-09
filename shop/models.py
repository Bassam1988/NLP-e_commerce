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


class Product(models.Model):
    seller_id = models.ForeignKey(User, on_delete=models.CASCADE)
    m_category_id = models.ForeignKey(MainCategory, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=30)
    price = models.FloatField(default=0.00)
    description = models.CharField(max_length=1500)
    img = models.CharField(max_length=30, default='./img/avatar.jpg')
    vedio = models.CharField(max_length=30, blank=True)
    s_categories = models.ManyToManyField(
        SubCategory, blank=False, related_name="products")
    other_s_category = models.CharField(max_length=30, blank=True)
    addresses = models.ManyToManyField(
        Address, blank=False, related_name="products")


class Query(models.Model):
    customer_id = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    done = models.BooleanField()


class NotificationCategory(models.Model):
    name = models.CharField(max_length=30)

class Notification(models.Model):
    note_category = models.ForeignKey(NotificationCategory, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    done = models.BooleanField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    showedByUsers = models.ManyToManyField(
        SubCategory, blank=False, related_name="notifications")