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

class StockList(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class StockDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class TipoProductoList(generics.ListCreateAPIView):
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer

class TipoProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer

class DoctorList(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AbonoList(generics.ListCreateAPIView):
    queryset = Abono.objects.all()
    serializer_class = AbonoSerializer

class AbonoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Abono.objects.all()
    serializer_class = AbonoSerializer

class ServicioList(generics.ListCreateAPIView):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class ServicioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class ProvinciaList(generics.ListCreateAPIView):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class ProvinciaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class DepartamentoList(generics.ListCreateAPIView):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class DepartamentoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class CiudadList(generics.ListCreateAPIView):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class CiudadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class ClienteList(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ClienteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class VendedorList(generics.ListCreateAPIView):
    queryset = Vendedor.objects.all()
    serializer_class = VendedorSerializer

class VendedorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendedor.objects.all()
    serializer_class = VendedorSerializer

class FacturaList(generics.ListCreateAPIView):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class FacturaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class VentaList(generics.ListCreateAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class VentaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class DetalleVentaList(generics.ListCreateAPIView):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer

class DetalleVentaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer