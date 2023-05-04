SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS venta;
DROP TABLE IF EXISTS doctor;
DROP TABLE IF EXISTS vendedor;
DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS producto;
DROP TABLE IF EXISTS detalleVenta;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS provincia;
DROP TABLE IF EXISTS departamento;
DROP TABLE IF EXISTS ciudad;
DROP TABLE IF EXISTS factura;
DROP TABLE IF EXISTS tipoProducto;
DROP TABLE IF EXISTS servicio;
DROP TABLE IF EXISTS abono;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE cliente (
    idCliente INTEGER NOT NULL,
    idUsuario INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    DNI INTEGER NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    idCiudad INTEGER NOT NULL,
    telefono VARCHAR(20),
    celular VARCHAR(20),
    fechaNac DATE NOT NULL,
    PRIMARY KEY (idCliente),
    UNIQUE (DNI)
);

CREATE TABLE venta (
    idVenta BIGINT NOT NULL,
    idVendedor INTEGER NOT NULL,
    idCliente INTEGER NOT NULL,
    idFactura BIGINT NOT NULL,
    fecha DATE NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL,
    PRIMARY KEY (idVenta)
);

CREATE TABLE doctor (
    idDoctor INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    DNI INTEGER NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    idCiudad INTEGER NOT NULL,
    telefono VARCHAR(20),
    celular VARCHAR(20),
    email VARCHAR(40) NOT NULL,
    PRIMARY KEY (idDoctor),
    UNIQUE (DNI)
);

CREATE TABLE vendedor (
    idVendedor INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    DNI INTEGER NOT NULL,
    telefono VARCHAR(20),
    celular VARCHAR(20),
    email VARCHAR(40) NOT NULL,
    PRIMARY KEY (idVendedor),
    UNIQUE (DNI)
);

CREATE TABLE stock (
    idProducto INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    PRIMARY KEY (idProducto)
);

CREATE TABLE producto (
    idProducto INTEGER NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    idTipoProducto SMALLINT NOT NULL,
    precioCosto INTEGER NOT NULL,
    precio INTEGER NOT NULL,
    fechaIngreso DATE NOT NULL,
    PRIMARY KEY (idProducto)
);

CREATE TABLE detalleVenta (
    idVenta INTEGER NOT NULL,
    idProducto INTEGER NOT NULL,
    cantidad SMALLINT NOT NULL,
    descuento FLOAT NOT NULL,
    PRIMARY KEY (idVenta, idProducto)
);

CREATE TABLE usuario (
    idUsuario INTEGER NOT NULL,
    tipoUsuario SMALLINT NOT NULL,
    usuario VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    aceptaTC BOOLEAN NOT NULL,
    PRIMARY KEY (idUsuario),
    UNIQUE (usuario)
);

CREATE TABLE provincia (
    idProvincia INTEGER NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    PRIMARY KEY (idProvincia)
);

CREATE TABLE departamento (
    idDepartamento INTEGER NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    idProvincia INTEGER NOT NULL,
    PRIMARY KEY (idDepartamento)
);

CREATE TABLE ciudad (
    idCiudad INTEGER NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    idDepartamento INTEGER NOT NULL,
    PRIMARY KEY (idCiudad)
);

CREATE TABLE factura (
    idFactura BIGINT NOT NULL,
    tipo CHAR(1) NOT NULL,
    CUIT VARCHAR(20) NOT NULL,
    total INTEGER NOT NULL,
    fechaApertura DATE NOT NULL,
    fechaCierre DATE NOT NULL,
    direccionEnvio VARCHAR(40) NOT NULL,
    idCiudad INTEGER NOT NULL,
    PRIMARY KEY (idFactura)
);

CREATE TABLE tipoProducto (
    idTipoProducto SMALLINT NOT NULL,
    descripcion VARCHAR(10) NOT NULL,
    PRIMARY KEY (idTipoProducto)
);

CREATE TABLE servicio (
    idServicio INTEGER NOT NULL,
    idFactura BIGINT NOT NULL,
    descripcion TEXT NOT NULL,
    estado VARCHAR(30) NOT NULL,
    valor INTEGER NOT NULL,
    fecha DATE NOT NULL,
    PRIMARY KEY (idServicio)
);

CREATE TABLE abono (
    idAbono INTEGER NOT NULL,
    idFactura BIGINT NOT NULL,
    descripcion TEXT NOT NULL,
    estado VARCHAR(30) NOT NULL,
    valor INTEGER NOT NULL,
    fecha DATE NOT NULL,
    PRIMARY KEY (idAbono)
);

ALTER TABLE cliente ADD FOREIGN KEY (idCiudad) REFERENCES ciudad(idCiudad);
ALTER TABLE cliente ADD FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario);
ALTER TABLE venta ADD FOREIGN KEY (idVendedor) REFERENCES vendedor(idVendedor);
ALTER TABLE venta ADD FOREIGN KEY (idCliente) REFERENCES cliente(idCliente);
ALTER TABLE venta ADD FOREIGN KEY (idFactura) REFERENCES factura(idFactura);
ALTER TABLE doctor ADD FOREIGN KEY (idCiudad) REFERENCES ciudad(idCiudad);
ALTER TABLE producto ADD FOREIGN KEY (idTipoProducto) REFERENCES tipoProducto(idTipoProducto);
ALTER TABLE detalleVenta ADD FOREIGN KEY (idVenta) REFERENCES venta(idVenta);
ALTER TABLE detalleVenta ADD FOREIGN KEY (idProducto) REFERENCES producto(idProducto);
ALTER TABLE departamento ADD FOREIGN KEY (idProvincia) REFERENCES provincia(idProvincia);
ALTER TABLE ciudad ADD FOREIGN KEY (idDepartamento) REFERENCES departamento(idDepartamento);
ALTER TABLE factura ADD FOREIGN KEY (idCiudad) REFERENCES ciudad(idCiudad);
ALTER TABLE servicio ADD FOREIGN KEY (idFactura) REFERENCES factura(idFactura);
ALTER TABLE abono ADD FOREIGN KEY (idFactura) REFERENCES factura(idFactura);