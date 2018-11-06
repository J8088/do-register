from rest_framework import serializers
from .models import Address


class AddressSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(label='ID', read_only=True)
    name = serializers.CharField()
    urlAddress = serializers.CharField(source='url_field')

    class Meta:
        model = Address
        fields = ('id', 'name', 'urlAddress', 'status')
