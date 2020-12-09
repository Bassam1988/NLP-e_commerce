from rest_framework import serializers

from .models import SubCategory


class SubCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('name',)