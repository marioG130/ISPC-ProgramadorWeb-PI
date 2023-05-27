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

