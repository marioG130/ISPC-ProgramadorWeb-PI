from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, filters, status, views
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

from .models import *
from .serializers import *

def index(request):
    return HttpResponse("Optica Temiro API endpoints")

# ---- Vistas referidas a la dirección postal

class ProvinciaList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['nombre']
    filter_backends = (filters.SearchFilter,)
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class ProvinciaDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer

class DepartamentoList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['nombre']
    filter_backends = (filters.SearchFilter,)
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class DepartamentoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class CiudadList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['nombre']
    filter_backends = (filters.SearchFilter,)
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class CiudadDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer


# ---- Vistas referidas a los clientes

class UsuarioList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]  # [IsAdminUser]
    search_fields = ['usuario', 'email']
    filter_backends = (filters.SearchFilter,)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]  # [IsAdminUser]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioLogin(views.APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        usr = request.POST.get('usuario', None)
        pwd = request.POST.get('password', None)
        # print(usr,'\t',pwd)
        if Usuario.autenticar(usr, pwd):
            return Response(data='OK', status=status.HTTP_200_OK)
        return Response(data='NO AUTORIZADO', status=status.HTTP_401_UNAUTHORIZED)

class UsuarioLogout(views.APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        usr = request.POST.get('usuario', None)
        Usuario.logout(usr)
        return Response(data='OK', status=status.HTTP_200_OK)

class UsuarioRegistro(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UsuarioSerializer

class ClienteList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['apellido', 'nombre', 'dni']
    filter_backends = (filters.SearchFilter,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ClienteDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


# ---- Vistas referidas a los productos

class TipoProductoList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['descripcion']
    filter_backends = (filters.SearchFilter,)
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer

class TipoProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer

class ProductoList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['descripcion']
    filter_backends = (filters.SearchFilter,)
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoAgregar(views.APIView):
    permission_classes = [AllowAny]  # [IsAdminUser]
    def post(self, request, format=None):
        serializer = ProductoSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductoBorrar(views.APIView):
    permission_classes = [AllowAny]  # [IsAdminUser]
    def post(self, request, format=None):
        prd = ProductoSerializer(data = request.data).instance
        if prd:
            prd.delete()
            return Response(data='OK', status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StockList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class StockDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


# ---- Vistas referidas a las ventas

class VendedorList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['apellido', 'nombre', 'dni']
    filter_backends = (filters.SearchFilter,)
    queryset = Vendedor.objects.all()
    serializer_class = VendedorSerializer

class VendedorDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Vendedor.objects.all()
    serializer_class = VendedorSerializer

class FacturaList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class FacturaDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class VentaList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class VentaDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class DetalleVentaList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer

class DetalleVentaDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer


# ---- Vistas referidas a servicios adicionales

class DoctorList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    search_fields = ['apellido', 'nombre', 'dni']
    filter_backends = (filters.SearchFilter,)
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AbonoList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Abono.objects.all()
    serializer_class = AbonoSerializer

class AbonoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Abono.objects.all()
    serializer_class = AbonoSerializer

class ServicioList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class ServicioDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

