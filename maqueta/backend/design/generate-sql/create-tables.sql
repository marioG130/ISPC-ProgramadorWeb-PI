SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Cliente;
DROP TABLE IF EXISTS Venta;
DROP TABLE IF EXISTS Doctor;
DROP TABLE IF EXISTS Vendedor;
DROP TABLE IF EXISTS Stock;
DROP TABLE IF EXISTS Producto;
DROP TABLE IF EXISTS DetalleVenta;
DROP TABLE IF EXISTS Usuario;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE Cliente (
    DNIcliente INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    telefono INTEGER NOT NULL,
    email VARCHAR(40) NOT NULL,
    fechaNac DATE NOT NULL,
    idUsuario INTEGER NOT NULL,
    PRIMARY KEY (DNIcliente)
);

CREATE TABLE Venta (
    idVenta INTEGER NOT NULL,
    fechaVenta DATE NOT NULL,
    idVendedor INTEGER NOT NULL,
    DNIcliente INTEGER NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    PRIMARY KEY (idVenta)
);

CREATE TABLE Doctor (
    DNIdoctor INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    telefono INTEGER NOT NULL,
    email VARCHAR(40) NOT NULL,
    PRIMARY KEY (DNIdoctor)
);

CREATE TABLE Vendedor (
    DNIvendedor INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    telefono INTEGER NOT NULL,
    email VARCHAR(40) NOT NULL,
    idVendedor INTEGER NOT NULL,
    PRIMARY KEY (DNIvendedor),
    UNIQUE (idVendedor)
);

CREATE TABLE Stock (
    idProducto INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    PRIMARY KEY (idProducto)
);

CREATE TABLE Producto (
    idProducto INTEGER NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    precio DOUBLE NOT NULL,
    PRIMARY KEY (idProducto)
);

CREATE TABLE DetalleVenta (
    idVenta INTEGER NOT NULL,
    idProducto INTEGER NOT NULL,
    cantidad SMALLINT NOT NULL,
    descuento FLOAT NOT NULL,
    PRIMARY KEY (idVenta, idProducto)
);

CREATE TABLE Usuario (
    idUsuario INTEGER NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    aceptaTC BOOLEAN NOT NULL,
    PRIMARY KEY (idUsuario)
);

ALTER TABLE Cliente ADD FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario);
ALTER TABLE Venta ADD FOREIGN KEY (idVendedor) REFERENCES Vendedor(idVendedor);
ALTER TABLE Venta ADD FOREIGN KEY (DNIcliente) REFERENCES Cliente(DNIcliente);