# Generated by Django 3.1.1 on 2020-12-31 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0020_auto_20201230_1104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='viewd_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='subcategory',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='img/subCategories/2020-12-31 08:59:41.600869'),
        ),
    ]