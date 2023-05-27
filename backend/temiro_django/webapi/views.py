from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, filters

from .models import *
from .serializers import *

def index(request):
    return HttpResponse("Optica Temiro API endpoints")

class UsuarioList(generics.ListCreateAPIView):
    search_fields = ['usuario', 'email']
    filter_backends = (filters.SearchFilter,)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class ProductoList(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
