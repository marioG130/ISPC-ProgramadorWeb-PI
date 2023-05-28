from rest_framework import serializers

from .models import *


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('idusuario', 'tipousuario', 'usuario', 'password',
                  'email', 'aceptatc')


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('idproducto', 'descripcion', 'idtipoproducto', 'preciocosto',
                  'precio', 'fechaingreso')

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('idproducto', 'cantidad')

class TipoProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoProducto
        fields = ('idtipoproducto', 'descripcion')

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('iddoctor', 'apellido', 'nombre')

class AbonoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Abono
        fields = ('idabono', 'idfactura', 'descripcion', 'estado', 'valor', 'fecha')

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ('idservicio', 'idfactura', 'descripcion', 'estado', 'valor', 'fecha')

class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = ('idprovincia', 'nombre')

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = ('iddepartamento', 'nombre', 'idprovincia')

class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ('idciudad', 'nombre', 'iddedepartamento')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('idcliente', 'idusuario', 'apellido', 'nombre', 'dni', 'direccion', 'email',
                  'idciudad', 'telefono', 'celular', 'fechanac')

class VendedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendedor
        fields = ('idvendedor', 'apellido', 'nombre', 'dni', 'telefono', 'celular', 'email')

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = ('idfactura', 'tipo', 'cuit', 'total', 'fechaapertura', 'fechacierre',
                  'direccionenvio', 'idciudad')
        

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ('idventa', 'idvendedor', 'idcliente', 'idfactura', 'fecha',
                  'descripcion', 'estado')


class DetalleVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields = ('iddetalleventa', 'idventa', 'idproducto', 'cantidad', 'descuento')