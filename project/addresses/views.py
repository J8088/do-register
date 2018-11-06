from rest_framework.response import Response
from .models import Address
from .serializers import AddressSerializer
from rest_framework import generics, views
from .utils import get_status_code


class AddressListAPIView(generics.ListAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = AddressSerializer(queryset, many=True)
        data_list = list(map(lambda serialized: dict(serialized), serializer.data))
        response = [{
            'id': item['id'],
            'name': item['name'],
            'urlAddress': item['urlAddress'],
            'status': get_status_code(item['urlAddress'])
        } for item in data_list]
        return Response(response)


class AddressStatusCodeAPIView(views.APIView):
    def get(self, request, id=None):
        address = Address.objects.filter(id=id).first()
        response = {
            'id': id,
            'status': get_status_code(address.url_field)
        }
        return Response(response)
