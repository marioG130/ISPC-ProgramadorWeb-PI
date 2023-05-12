# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

from django.db import models

class Abono(models.Model):
    idabono = models.IntegerField(db_column='idAbono', primary_key=True)  
    idfactura = models.ForeignKey('Factura', models.DO_NOTHING, db_column='idFactura')  
    descripcion = models.TextField()
    estado = models.CharField(max_length=30)
    valor = models.IntegerField()
    fecha = models.DateField()

    class Meta:
        managed = True
        db_table = 'abono'


class Ciudad(models.Model):
    idciudad = models.IntegerField(db_column='idCiudad', primary_key=True)  
    nombre = models.CharField(max_length=40)
    iddepartamento = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='idDepartamento')  

    class Meta:
        managed = False
        db_table = 'ciudad'


class Cliente(models.Model):
    idcliente = models.IntegerField(db_column='idCliente', primary_key=True)  
    idusuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='idUsuario')  
    apellido = models.CharField(max_length=30)
    nombre = models.CharField(max_length=30)
    dni = models.IntegerField(db_column='DNI', unique=True)  
    direccion = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    idciudad = models.ForeignKey(Ciudad, models.DO_NOTHING, db_column='idCiudad')  
    telefono = models.CharField(max_length=20, blank=True, null=True)
    celular = models.CharField(max_length=20, blank=True, null=True)
    fechanac = models.DateField(db_column='fechaNac')  

    class Meta:
        managed = False
        db_table = 'cliente'


class Departamento(models.Model):
    iddepartamento = models.IntegerField(db_column='idDepartamento', primary_key=True)  
    nombre = models.CharField(max_length=40)
    idprovincia = models.ForeignKey('Provincia', models.DO_NOTHING, db_column='idProvincia')  

    class Meta:
        managed = False
        db_table = 'departamento'


class Detalleventa(models.Model):
    iddetalleventa = models.BigIntegerField(db_column='idDetalleVenta', primary_key=True)  
    idventa = models.ForeignKey('Venta', models.DO_NOTHING, db_column='idVenta')  
    idproducto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idProducto')  
    cantidad = models.SmallIntegerField()
    descuento = models.FloatField()

    class Meta:
        managed = False
        db_table = 'detalleVenta'


class Doctor(models.Model):
    iddoctor = models.IntegerField(db_column='idDoctor', primary_key=True)  
    apellido = models.CharField(max_length=30)
    nombre = models.CharField(max_length=30)
    dni = models.IntegerField(db_column='DNI', unique=True)  
    direccion = models.CharField(max_length=40)
    idciudad = models.ForeignKey(Ciudad, models.DO_NOTHING, db_column='idCiudad')  
    telefono = models.CharField(max_length=20, blank=True, null=True)
    celular = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=40)

    class Meta:
        managed = False
        db_table = 'doctor'


class Factura(models.Model):
    idfactura = models.BigIntegerField(db_column='idFactura', primary_key=True)  
    tipo = models.CharField(max_length=1)
    cuit = models.CharField(db_column='CUIT', max_length=20)  
    total = models.IntegerField()
    fechaapertura = models.DateField(db_column='fechaApertura')  
    fechacierre = models.DateField(db_column='fechaCierre')  
    direccionenvio = models.CharField(db_column='direccionEnvio', max_length=40)  
    idciudad = models.ForeignKey(Ciudad, models.DO_NOTHING, db_column='idCiudad')  

    class Meta:
        managed = False
        db_table = 'factura'


class Producto(models.Model):
    idproducto = models.IntegerField(db_column='idProducto', primary_key=True)  
    descripcion = models.CharField(max_length=50)
    idtipoproducto = models.ForeignKey('Tipoproducto', models.DO_NOTHING, db_column='idTipoProducto')  
    preciocosto = models.IntegerField(db_column='precioCosto')  
    precio = models.IntegerField()
    fechaingreso = models.DateField(db_column='fechaIngreso')  

    class Meta:
        managed = False
        db_table = 'producto'


class Provincia(models.Model):
    idprovincia = models.IntegerField(db_column='idProvincia', primary_key=True)  
    nombre = models.CharField(max_length=40)

    class Meta:
        managed = False
        db_table = 'provincia'


class Servicio(models.Model):
    idservicio = models.IntegerField(db_column='idServicio', primary_key=True)  
    idfactura = models.ForeignKey(Factura, models.DO_NOTHING, db_column='idFactura')  
    descripcion = models.TextField()
    estado = models.CharField(max_length=30)
    valor = models.IntegerField()
    fecha = models.DateField()

    class Meta:
        managed = False
        db_table = 'servicio'


class Stock(models.Model):
    idproducto = models.IntegerField(db_column='idProducto', primary_key=True)  
    cantidad = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'stock'


class Tipoproducto(models.Model):
    idtipoproducto = models.SmallIntegerField(db_column='idTipoProducto', primary_key=True)  
    descripcion = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'tipoProducto'


class Usuario(models.Model):
    idusuario = models.IntegerField(db_column='idUsuario', primary_key=True)  
    tipousuario = models.SmallIntegerField(db_column='tipoUsuario')  
    usuario = models.CharField(unique=True, max_length=30)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    aceptatc = models.IntegerField(db_column='aceptaTC')  

    class Meta:
        managed = False
        db_table = 'usuario'


class Vendedor(models.Model):
    idvendedor = models.IntegerField(db_column='idVendedor', primary_key=True)  
    apellido = models.CharField(max_length=30)
    nombre = models.CharField(max_length=30)
    dni = models.IntegerField(db_column='DNI', unique=True)  
    telefono = models.CharField(max_length=20, blank=True, null=True)
    celular = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=40)

    class Meta:
        managed = False
        db_table = 'vendedor'


class Venta(models.Model):
    idventa = models.BigIntegerField(db_column='idVenta', primary_key=True)  
    idvendedor = models.ForeignKey(Vendedor, models.DO_NOTHING, db_column='idVendedor')  
    idcliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='idCliente')  
    idfactura = models.ForeignKey(Factura, models.DO_NOTHING, db_column='idFactura')  
    fecha = models.DateField()
    descripcion = models.CharField(max_length=50)
    estado = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'venta'
