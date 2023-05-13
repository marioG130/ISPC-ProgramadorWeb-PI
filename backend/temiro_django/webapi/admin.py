from django.contrib import admin
from .models import *

admin.site.register(Provincia)
admin.site.register(Departamento)
admin.site.register(Ciudad)

admin.site.register(Usuario)
admin.site.register(Cliente)

admin.site.register(TipoProducto)
admin.site.register(Producto)
admin.site.register(Stock)

admin.site.register(Vendedor)
admin.site.register(Factura)
admin.site.register(Venta)
admin.site.register(DetalleVenta)

admin.site.register(Doctor)
admin.site.register(Abono)
admin.site.register(Servicio)
