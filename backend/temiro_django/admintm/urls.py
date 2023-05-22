from django.urls import path
from django.contrib import admin  

from admintm import views  

urlpatterns = [
    path('', views.index, name="index"),    
    path('prod', views.prod),  
    path('mostrar', views.mostrar),  
    path('editar/<int:id>', views.editar),  
    path('cambiar/<int:id>', views.cambiar),  
    path('borrar/<int:id>', views.borrar),
]
