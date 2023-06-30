from django.urls import path, re_path
from django.views.decorators.http import require_http_methods
from .views import *

urlpatterns = [
    path("", index, name="index"),

    # ---- Urls referidas a la dirección postal

    re_path(r'^provincia$', ProvinciaList.as_view()),
    re_path(r'^provincia/(?P<pk>[0-9]+)$', ProvinciaDetail.as_view()),

    re_path(r'^departamento$', DepartamentoList.as_view()),
    re_path(r'^departamento/(?P<pk>[0-9]+)$', DepartamentoDetail.as_view()),

    re_path(r'^ciudad$', CiudadList.as_view()),
    re_path(r'^ciudad/(?P<pk>[0-9]+)$', CiudadDetail.as_view()),

    # ---- Urls referidas a los clientes

    path('login/', UsuarioLogin.as_view(), name='login'),
    path('logout/', UsuarioLogout.as_view(), name='logout'),
    path('registro/', UsuarioRegistro.as_view(), name='registro'),
    re_path(r'^usuario$', UsuarioList.as_view()),
    re_path(r'^usuario/(?P<pk>[0-9]+)$', UsuarioDetail.as_view()),

    path('altacliente/', ClienteAgregar.as_view(), name='altacliente'),
    path('modcliente/<int:idcliente>/', ClienteModificar.as_view(), name='modcliente'),
    path('bajacliente/<int:idcliente>/', ClienteBorrar.as_view(), name='bajacliente'),
    re_path(r'^cliente$', ClienteList.as_view()),
    re_path(r'^cliente/(?P<pk>[0-9]+)$', ClienteDetail.as_view()),

    # ---- Urls referidas a los productos

    re_path(r'^tipoproducto$', TipoProductoList.as_view()),
    re_path(r'^tipoproducto/(?P<pk>[0-9]+)$', TipoProductoDetail.as_view()),

    path('altaproducto/', ProductoAgregar.as_view(), name='altaproducto'),
    path('modproducto/<int:idproducto>/', ProductoModificar.as_view()),
    path('bajaproducto/<int:idproducto>/', ProductoBorrar.as_view(), name='bajaproducto'),
    re_path(r'^producto$', ProductoList.as_view()),
    re_path(r'^producto/(?P<pk>[0-9]+)$', ProductoDetail.as_view()),
    
    re_path(r'^stock$', StockList.as_view()),
    re_path(r'^stock/(?P<pk>[0-9]+)$', StockDetail.as_view()),

    # ---- Urls referidas a las ventas
    
   path('altaventa/', VentaAgregar.as_view(), name='ventaproducto'),
   path('modventa/<int:idventa>/', VentaModificar.as_view()),
   path('bajaventa/<int:idventa>/', VentaBorrar.as_view(), name='bajaventa'),
   re_path(r'^venta$', VentaList.as_view()),
   re_path(r'^venta/(?P<pk>[0-9]+)$', VentaDetail.as_view()),

    re_path(r'^vendedor$', VendedorList.as_view()),
    re_path(r'^vendedor/(?P<pk>[0-9]+)$', VendedorDetail.as_view()),

    re_path(r'^factura$', FacturaList.as_view()),
    re_path(r'^factura/(?P<pk>[0-9]+)$', FacturaDetail.as_view()),

    re_path(r'^venta$', VentaList.as_view()),
    re_path(r'^venta/(?P<pk>[0-9]+)$', VentaDetail.as_view()),

    path('altadetalleventa/', DetalleVentaAgregar.as_view(), name='altadetalleventa'),
    path('moddetalleventa/<int:idventa>/', DetalleVentaModificar.as_view()),
    path('bajadetalleventa/<int:idventa>/', DetalleVentaBorrar.as_view(), name='bajadetalleventa'),
    re_path(r'^detalleventa$', DetalleVentaList.as_view()),
    re_path(r'^detalleventa/(?P<pk>[0-9]+)$', DetalleVentaDetail.as_view()),

    # ---- Urls referidas a servicios adicionales

    re_path(r'^doctor$', DoctorList.as_view()),
    re_path(r'^doctor/(?P<pk>[0-9]+)$', DoctorDetail.as_view()),

    re_path(r'^abono$', AbonoList.as_view()),
    re_path(r'^abono/(?P<pk>[0-9]+)$', AbonoDetail.as_view()),

    re_path(r'^servicio$', ServicioList.as_view()),
    re_path(r'^servicio/(?P<pk>[0-9]+)$', ServicioDetail.as_view()),

]
