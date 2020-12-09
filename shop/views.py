from django.shortcuts import render

from rest_framework import viewsets

from .subCat_serializers import SubCategorySerializer
from .models import SubCategory


class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all().order_by('name')
    serializer_class = SubCategorySerializer
