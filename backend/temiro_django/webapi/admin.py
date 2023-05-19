from django.contrib import admin
from .models import *


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('idproducto','descripcion','preciocosto','precio','fechaingreso')

class AbonoAdmin(admin.ModelAdmin):
    list_display = ('idabono','descripcion','fecha','estado','valor')

class ServicioAdmin(admin.ModelAdmin):
    list_display = ('idservicio','descripcion','fecha','estado','valor')


admin.site.register(Provincia)
admin.site.register(Departamento)
admin.site.register(Ciudad)

admin.site.register(Usuario)
admin.site.register(Cliente)

admin.site.register(TipoProducto)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Stock)

admin.site.register(Vendedor)
admin.site.register(Factura)
admin.site.register(Venta)
admin.site.register(DetalleVenta)

admin.site.register(Doctor)
admin.site.register(Abono, AbonoAdmin)
admin.site.register(Servicio, ServicioAdmin)
