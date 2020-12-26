from rest_framework import viewsets, permissions

from .serializers import *

from django.shortcuts import render

from rest_framework import viewsets

from .serializers import *

from .models import *


class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all().order_by('name')
    serializer_class = SubCategorySerializer


class MainCategoryViewSet(viewsets.ModelViewSet):
    queryset = MainCategory.objects.all().order_by('name')
    serializer_class = MainCategorySerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all().order_by('id')
    serializer_class = AddressSerializer


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.DjangoModelPermissionsOrAnonReadOnly]
    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.request.user.products.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)


class ShowProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.DjangoModelPermissionsOrAnonReadOnly]

    serializer_class = ShowProductSerializer

    def get_queryset(self):
        user = self.request.user
        
        # return (user.groups)
        groups = user.groups.all().order_by('id')
        for group_data in groups:
            if (str(group_data) == "seller"):
                return self.request.user.products.all().order_by('id')
            else:
                return Product.objects.all()

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)


class QueryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = QuerySerializer

    def get_queryset(self):
        return self.request.user.myQueries.all()

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)


class FeedbackViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = FeedbackSerializer

    def get_queryset(self):
        return self.request.user.feedbacks.all().order_by('created_at')

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)


class NotificationCategoryViewSet(viewsets.ModelViewSet):
    queryset = NotificationCategory.objects.all().order_by('id')
    serializer_class = NotificationCategorySerializer


class NotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return self.request.user.myNotifications.all()

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)
