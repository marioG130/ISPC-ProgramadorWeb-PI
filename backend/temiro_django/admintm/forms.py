from django import forms  

from webapi.models import Producto

class ProductoForm(forms.ModelForm):  
    class Meta:  
        model = Producto
        fields = "__all__"  
