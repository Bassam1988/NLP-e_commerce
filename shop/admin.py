from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(MainCategory)
admin.site.register(SubCategory)
admin.site.register(Address)
admin.site.register(Product)
admin.site.register(NotificationCategory)
