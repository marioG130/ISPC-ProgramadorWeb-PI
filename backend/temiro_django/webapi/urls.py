from django.urls import path, re_path

from .views import *

urlpatterns = [
    path("", index, name="index"),
    
    re_path(r'^usuario$', UsuarioList.as_view()),
    re_path(r'^usuario/(?P<pk>[0-9]+)$', UsuarioDetail.as_view()),
    
    re_path(r'^prodcuto$', ProductoList.as_view()),
    re_path(r'^producto/(?P<pk>[0-9]+)$', ProductoDetail.as_view()),    
]
