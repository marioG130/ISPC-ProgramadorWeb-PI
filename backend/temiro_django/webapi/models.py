from django.db import models

# ---- Tablas referidas a la dirección postal

class Provincia(models.Model):
    idprovincia = models.IntegerField(db_column='idProvincia', primary_key=True)
    nombre = models.CharField(max_length=40)
    def __unicode__(self):
        return self.nombre
    class Meta:
        db_table = 'provincia'
        managed = False
        verbose_name_plural = 'Provincias'


class Departamento(models.Model):
    iddepartamento = models.IntegerField(db_column='idDepartamento', primary_key=True)
    nombre = models.CharField(max_length=40)
    idprovincia = models.ForeignKey('Provincia', models.DO_NOTHING, db_column='idProvincia')
    def __unicode__(self):
        return self.nombre
    class Meta:
        db_table = 'departamento'
        managed = False
        verbose_name_plural = 'Departamentos'


class Ciudad(models.Model):
    idciudad = models.IntegerField(db_column='idCiudad', primary_key=True)
    nombre = models.CharField(max_length=40)
    iddepartamento = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='idDepartamento')
    def __unicode__(self):
        return self.nombre
    class Meta:
        db_table = 'ciudad'
        managed = False
        verbose_name_plural = 'Ciudades'


# ---- Tablas referidas a los clientes

class Usuario(models.Model):
    idusuario = models.IntegerField(db_column='idUsuario', primary_key=True)
    tipousuario = models.SmallIntegerField(db_column='tipoUsuario')
    usuario = models.CharField(unique=True, max_length=30)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    aceptatc = models.IntegerField(db_column='aceptaTC')
    def __unicode__(self):
        return self.usuario
    class Meta:
        db_table = 'usuario'
        managed = False
        verbose_name_plural = 'Usuarios'


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
    def __unicode__(self):
        return self.nombre + ' ' + self.apellido
    class Meta:
        db_table = 'cliente'
        managed = False
        verbose_name_plural = 'Clientes'


# ---- Tablas referidas a los productos

class TipoProducto(models.Model):
    idtipoproducto = models.SmallIntegerField(db_column='idTipoProducto', primary_key=True)
    descripcion = models.CharField(max_length=10)
    def __unicode__(self):
        return self.descripcion
    class Meta:
        db_table = 'tipoProducto'
        managed = False
        verbose_name_plural = 'Tipos Producto'


class Producto(models.Model):
    idproducto = models.IntegerField(db_column='idProducto', primary_key=True)
    descripcion = models.CharField(max_length=50)
    idtipoproducto = models.ForeignKey('TipoProducto', models.DO_NOTHING, db_column='idTipoProducto')
    preciocosto = models.IntegerField(db_column='precioCosto')
    precio = models.IntegerField()
    fechaingreso = models.DateField(db_column='fechaIngreso')
    def __unicode__(self):
        return self.descripcion
    class Meta:
        db_table = 'producto'
        managed = False
        verbose_name_plural = 'Productos'


class Stock(models.Model):
    idproducto = models.IntegerField(db_column='idProducto', primary_key=True)
    cantidad = models.IntegerField()
    def __unicode__(self):
        return str(self.cantidad)
    class Meta:
        db_table = 'stock'
        managed = False
        verbose_name_plural = 'Stocks'


# ---- Tablas referidas a las ventas

class Vendedor(models.Model):
    idvendedor = models.IntegerField(db_column='idVendedor', primary_key=True)
    apellido = models.CharField(max_length=30)
    nombre = models.CharField(max_length=30)
    dni = models.IntegerField(db_column='DNI', unique=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    celular = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=40)
    def __unicode__(self):
        return self.nombre + ' ' + self.apellido
    class Meta:
        db_table = 'vendedor'
        managed = False
        verbose_name_plural = 'Vendedores'


class Factura(models.Model):
    idfactura = models.BigIntegerField(db_column='idFactura', primary_key=True)
    tipo = models.CharField(max_length=1)
    cuit = models.CharField(db_column='CUIT', max_length=20)
    total = models.IntegerField()
    fechaapertura = models.DateField(db_column='fechaApertura')
    fechacierre = models.DateField(db_column='fechaCierre')
    direccionenvio = models.CharField(db_column='direccionEnvio', max_length=40)
    idciudad = models.ForeignKey(Ciudad, models.DO_NOTHING, db_column='idCiudad')
    def __unicode__(self):
        return str(self.total)
    class Meta:
        db_table = 'factura'
        managed = False
        verbose_name_plural = 'Facturas'


class Venta(models.Model):
    idventa = models.BigIntegerField(db_column='idVenta', primary_key=True)
    idvendedor = models.ForeignKey(Vendedor, models.DO_NOTHING, db_column='idVendedor')
    idcliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='idCliente')
    idfactura = models.ForeignKey(Factura, models.DO_NOTHING, db_column='idFactura')
    fecha = models.DateField()
    descripcion = models.CharField(max_length=50)
    estado = models.CharField(max_length=30)
    def __unicode__(self):
        return self.descripcion
    class Meta:
        db_table = 'venta'
        managed = False
        verbose_name_plural = 'Ventas'


class DetalleVenta(models.Model):
    iddetalleventa = models.BigIntegerField(db_column='idDetalleVenta', primary_key=True)
    idventa = models.ForeignKey('Venta', models.DO_NOTHING, db_column='idVenta')
    idproducto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idProducto')
    cantidad = models.SmallIntegerField()
    descuento = models.FloatField()
    def __unicode__(self):
        return str(self.cantidad)
    class Meta:
        db_table = 'detalleVenta'
        managed = False
        verbose_name_plural = 'Detalle Ventas'


# ---- Tablas referidas a servicios adicionales

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
    def __unicode__(self):
        return self.nombre + ' ' + self.apellido
    class Meta:
        db_table = 'doctor'
        managed = False
        verbose_name_plural = 'Doctores'


class Abono(models.Model):
    idabono = models.IntegerField(db_column='idAbono', primary_key=True)
    idfactura = models.ForeignKey('Factura', models.DO_NOTHING, db_column='idFactura')
    descripcion = models.TextField()
    estado = models.CharField(max_length=30)
    valor = models.IntegerField()
    fecha = models.DateField()
    def __unicode__(self):
        return self.descripcion
    class Meta:
        db_table = 'abono'
        managed = False
        verbose_name_plural = 'Abonos'


class Servicio(models.Model):
    idservicio = models.IntegerField(db_column='idServicio', primary_key=True)
    idfactura = models.ForeignKey(Factura, models.DO_NOTHING, db_column='idFactura')
    descripcion = models.TextField()
    estado = models.CharField(max_length=30)
    valor = models.IntegerField()
    fecha = models.DateField()
    def __unicode__(self):
        return self.descripcion
    class Meta:
        db_table = 'servicio'
        managed = False
        verbose_name_plural = 'Servicios'

