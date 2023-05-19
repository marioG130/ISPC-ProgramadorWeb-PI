from django.shortcuts import render, redirect
from django.http import HttpResponse

from webapi.models import Producto
from admintm.forms import ProductoForm

def index(request):
    return HttpResponse("AdminTM index")

def prod(request):  
    if request.method == "POST":  
        form = ProductoForm(request.POST)  
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('/admintm/mostrar')  
            except:  
                pass  
    else:  
        form = ProductoForm()  
    return render(request,'producto.html',{'form':form})  

def mostrar(request):  
    productos = Producto.objects.all()  
    return render(request,"mostrar.html",{'productos': productos})  

def editar(request, id):  
    producto = Producto.objects.get(idproducto=id)  
    return render(request,'editar.html', {'producto': producto})  

def cambiar(request, id):  
    producto = Producto.objects.get(idproducto=id)  
    form = ProductoForm(request.POST, instance = producto)  
    if form.is_valid():  
        form.save()  
        return redirect("/admintm/mostrar")  
    return render(request, 'editar.html', {'producto': producto})  

def borrar(request, id):  
    producto = Producto.objects.get(idproducto=id)  
    producto.delete()  
    return redirect("/admintm/mostrar")  
