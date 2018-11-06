from django.urls import path
from . import views

urlpatterns = [
    path('api/addresses', views.AddressListAPIView.as_view()),
    path('api/check-address/<int:id>', views.AddressStatusCodeAPIView.as_view())
]