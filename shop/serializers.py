from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('username','password')

class UserListField(serializers.RelatedField):
   def to_representation(self, value):
        return { "username": value.username, "email": value.email,"first_name": value.first_name, "last_name": value.last_name}


class SubCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('name',)

class SubCategoryListField(serializers.RelatedField):

    def to_representation(self, value):
        return { "id": value.id, "name": value.name}




class MainCategorySerializer(serializers.HyperlinkedModelSerializer):
    #products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = MainCategory
        fields = ('id','name',)

class MainCategoryListField(serializers.RelatedField):

    def to_representation(self, value):
        return { "id": value.id, "name": value.name}


class AddressSerializer(serializers.HyperlinkedModelSerializer):
    #products = ProductSerializer(many=True, read_only=True)
    #products = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), many=True)
    class Meta:
        model = Address
        fields = ('id', 'country', 'state','city','region','Address', 'google_map', 'products')

class AddressListField(serializers.RelatedField):

    def to_representation(self, value):
        return { "id": value.id, "country": value.country, "state": value.state, "city": value.city, "region": value.region , "Address": value.Address, "google_map": value.google_map }


class ShowProductSerializer(serializers.HyperlinkedModelSerializer):
   
    addresses = AddressListField(read_only=True, many=True)
    #addresses = serializers.PrimaryKeyRelatedField(queryset=Address.objects.all(), many=True)
    #seller_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=False)
    seller = UserListField(read_only=True, many=False)
    #m_category_id = serializers.PrimaryKeyRelatedField(queryset=MainCategory.objects.all(), many=False)
    m_category = MainCategoryListField(read_only=True, many=False)
    #s_categories = serializers.PrimaryKeyRelatedField(queryset=SubCategory.objects.all(), many=True)
    s_categories = SubCategoryListField(read_only=True, many=True)
    class Meta:
        model = Product
        fields = ('id','seller','m_category', 'name','price','description', 'img','vedio','s_categories','other_s_category','addresses')

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    addresses = serializers.PrimaryKeyRelatedField(queryset=Address.objects.all(), many=True)
    seller = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=False)
    m_category = serializers.PrimaryKeyRelatedField(queryset=MainCategory.objects.all(), many=False)
    s_categories = serializers.PrimaryKeyRelatedField(queryset=SubCategory.objects.all(), many=True)
    class Meta:
        model = Product
        fields = ('id','seller','m_category', 'name','price','description', 'img','vedio','s_categories','other_s_category','addresses')

    
class QuerySerializer(serializers.HyperlinkedModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=False)
    class Meta:
        model = Query
        fields = ('id','customer','description', 'done')

        


class QueryListField(serializers.RelatedField):

    def to_representation(self, value):
        return { "id": value.id, "description": value.description}
        
      
class NotificationCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NotificationCategory
        fields = ('id','name',)

class NotificationCategoryListField(serializers.RelatedField):

    def to_representation(self, value):
        return { "id": value.id, "name": value.name}

class NotificationSerializer(serializers.HyperlinkedModelSerializer):
    user = UserListField(read_only=True, many=False)
    #note_category = NotificationCategoryListField(read_only=True, many=False)
    note_category = serializers.PrimaryKeyRelatedField(queryset=NotificationCategory.objects.all(), many=False)
    showedByUsers = UserListField(read_only=True, many=True)
    class Meta:
        model = Notification
        fields = ('id','note_category','description', 'done','description', 'user','showedByUsers')


