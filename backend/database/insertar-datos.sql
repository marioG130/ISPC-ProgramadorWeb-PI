
-- Los siguientes truncate borran completamente los datos de todas las tablas,
-- y deberían ejecutarse en el orden inverso de las integridades referenciales

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE servicio;
TRUNCATE TABLE abono;
TRUNCATE TABLE doctor;
TRUNCATE TABLE detalleVenta;
TRUNCATE TABLE venta;
TRUNCATE TABLE factura;
TRUNCATE TABLE vendedor;
TRUNCATE TABLE stock;
TRUNCATE TABLE producto;
TRUNCATE TABLE tipoProducto;
TRUNCATE TABLE cliente;
TRUNCATE TABLE usuario;
TRUNCATE TABLE ciudad;
TRUNCATE TABLE departamento;
TRUNCATE TABLE provincia;
SET FOREIGN_KEY_CHECKS = 1;


--
-- Dumping data for table `provincia`
--


INSERT INTO `provincia` VALUES (1,'Córdoba'),(2,'Buenos Aires'),(3,'Santa Fe'),(4,'Misiones'),(5,'San Luis'),(6,'Mendoza'),(7,'Entre Ríos'),(8,'Salta'),(9,'Tucumán'),(10,'Tierra del Fuego');


--
-- Dumping data for table `departamento`
--


INSERT INTO `departamento` VALUES (1,'Capital',1),(2,'La Plata',2),(3,'Rosario',3),(4,'Iguazú',4),(5,'Junín',5),(6,'Rivadavia',6),(7,'Gualeguaychú',7),(8,'Cafayate',8),(9,'San Miguel',9),(10,'Río Grande',10);


--
-- Dumping data for table `ciudad`
--


INSERT INTO `ciudad` VALUES (1,'Córdoba',1),(2,'VillaCarlos Paz',1),(3,'Alta Gracia',1),(4,'Bell Ville',1),(5,'Río Cuarto',1),(6,'Jesús María',1),(7,'San Agustín',1),(8,'Juárez Celman',1),(9,'Ischilín',1),(10,'Villa María',1);


--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` VALUES (1,1,'admin','temiro.40','admin@mail.com',1);
INSERT INTO `usuario` VALUES (111,100,'matiasavalos','cc32cc','matiasavalos@hotmail.com',1),
                             (112,90,'jonasdiaz','aa98aa','jonasdiaz@hotmail.com',1),
                             (113,75,'carinacruz','55ee11','carinacruz@hotmail.com',1),
                             (114,50,'danielapizarro','rrAE23','danielapizarro@hotmail.com',1),
                             (115,25,'ismaelcarros','Q44211','ismaelcarros@hotmail.com',1),
                             (116,99,'josemarquez','pw2321','josemarquez@hotmail.com',1),
                             (117,80,'rominatoledo','M75111','rominatoledo@hotmail.com',1),
                             (118,5,'jesicasuarez','Xs1234','jesicasuarez@hotmail.com',1),
                             (119,10,'emanuelpaez','43ZAN3','emanuelpaez@hotmail.com',1),
                             (120,2,'ivannavarro','Fa2023','ivannavarro@hotmail.com',1);

--
-- Dumping data for table `cliente`
--


INSERT INTO `cliente` VALUES (111,111,'Avalos','Matias',4456877,'Isasmendi 876 Barrio Ipona','matiasavalos@hotmail.com',1,'4534566','3512345678','2001-08-12'),
                             (112,112,'Díaz','Jonas',7786744,'Clemente 667 Barrio San Cristobal ','jonasdiaz@hotmail.com',5,'6645334','3512486900','1996-04-30'),
                             (113,113,'Cruz','Carina',6499065,'Leon 798 Barrio Medina','carinacruz@hotmail.com',8,'5333257','3512309864','1986-07-15'),
                             (114,114,'Pizarro','Daniela',3243567,'Israell 579 Barrio Chino','danielapizarro@hotmail.com',3,'1515671','3512896431','1981-09-04'),
                             (115,115,'Carros','Ismael',3145793,'Carruso 246 Barrio Solano','ismaelcarros@hotmail.com',9,'5480653','3517060864','1969-12-08'),
                             (116,116,'Marquez','Jose',5436890,'Roma 223 Barrio Crespo ','josemarquez@hotmail.com',2,'9874632','3513976432','2003-02-10'),
                             (117,117,'Toledo','Romina',7468293,'Victorino 453 Barrio Matienzo','rominatoledo@hotmail.com',4,'8374768','3517394031','1998-05-06'),
                             (118,118,'Suarez','Jesica',5837492,'Carmelo 289 Barrio Isidoro','jesicasuarez@hotmail.com',10,'4943204','3514374893','1975-05-23'),
                             (119,119,'Paez','Emanuel',1937563,'Suipacha 986 Barrio Belgrano','emanuelpaez@hotmail.com',6,'9684767','3516384909','2006-11-25'),
                             (120,120,'Navarro','Ivana',2628439,'Postorino 239 Barrio Sobremonte','ivannavarro@hotmail.com',7,'4743939','3513959684','1994-06-03');


--
-- Dumping data for table `tipoproducto`
--


INSERT INTO `tipoProducto` VALUES (11,'Cont.Color'),(12,'Cont.Aume.'),(13,'Lectura'),(14,'Polariz.'),(15,'Filtro UV'),(16,'Monofoc.'),(17,'Bifocales'),(18,'FiltroAzul'),(19,'Descanso'),(20,'Tendencia');


--
-- Dumping data for table `producto`
--


INSERT INTO `producto` VALUES (301,'Cont.Color',11,3000,6000,'2023-03-01'),(302,'Cont.Aume.',12,7000,10000,'2023-03-01'),(303,'Lectura',13,11000,16000,'2023-03-01'),(304,'Polariz.',14,15000,18000,'2023-03-01'),(305,'Filtro UV',15,17000,20000,'2023-03-01'),(306,'Monofoc.',16,22000,25000,'2023-03-01'),(307,'Bifocales',17,27000,30000,'2023-03-01'),(308,'FiltroAzul',18,25000,28000,'2023-03-01'),(309,'Descanso',19,17000,20000,'2023-03-01'),(310,'Tendencia',20,37000,40000,'2023-03-01');


--
-- Dumping data for table `stock`
--


INSERT INTO `stock` VALUES (301,190),(302,198),(303,215),(304,220),(305,250),(306,120),(307,200),(308,195),(309,180),(310,199);


--
-- Dumping data for table `vendedor`
--


INSERT INTO `vendedor` VALUES (1,'Araoz','Patricio',23547681,'4288997','3512478902','araozpatricio@hotmail.com'),(2,'Murua','Javier',32009443,'4766893','3517636832','muruajavier@hotmail.com'),(3,'Suarez','Samuel',27636311,'4688792','3514893211','suarezsamuel@hotmail.com'),(4,'Castro','Marisa',35876451,'5735421','3516933876','castromarisa@hotmail.com'),(5,'Pedernera','Jazmín',37987234,'5598765','3513458752','pedernerajazmin@hotmail.com'),(6,'Cortes','Mara',38623008,'4267891','3512825794','cortesmara@hotmail.com');


--
-- Dumping data for table `factura`
--


INSERT INTO `factura` VALUES (1,'1','303045040',39876,'2023-04-29','2023-04-29','Isasmendi 876 Barrio Ipona',1),(2,'2','303045040',25015,'2023-03-21','2023-03-21','Clemente 667 Barrio San Cristobal ',5),(3,'3','303045040',10150,'2022-12-12','2022-12-12','Leon 798 Barrio Medina',8),(4,'1','303045040',14200,'2022-12-15','2022-12-15','Israell 579 Barrio Chino',3),(5,'2','303045040',22864,'2023-01-13','2023-01-13','Carruso 246 Barrio Solano',9),(6,'3','303045040',43000,'2022-12-22','2022-12-22','Roma 223 Barrio Crespo ',2),(7,'1','303045040',20100,'2022-08-30','2022-08-30','Victorino 453 Barrio Matienzo',4),(8,'2','303045040',34445,'2022-03-29','2022-03-29','Carmelo 289 Barrio Isidoro',10),(9,'3','303045040',62510,'2023-03-11','2023-03-11','Suipacha 986 Barrio Belgrano',6),(10,'1','303045040',31000,'2023-04-01','2023-04-01','Postorino 239 Barrio Sobremonte',7);


--
-- Dumping data for table `venta`
--


INSERT INTO `venta` VALUES (1,4,111,1,'2023-04-29','Bifocales','Finalizada'),(2,3,112,2,'2023-03-21','Polariz.','Finalizada'),(3,2,113,3,'2022-12-12','Cont.Color','Finalizada'),(4,1,114,4,'2022-12-15','Cont.Aume.','Finalizada'),(5,6,115,5,'2023-01-13','Descanso','Finalizada'),(6,5,116,6,'2022-12-22','FiltroAzul','Finalizada'),(7,4,117,7,'2022-08-30','Lectura','Finalizada'),(8,3,118,8,'2022-03-29','Monofoc.','Finalizada'),(9,2,119,9,'2023-03-11','Tendencia','Finalizada'),(10,1,120,10,'2023-04-01','Filtro UV','Finalizada');


--
-- Dumping data for table `detalleventa`
--


INSERT INTO `detalleVenta` VALUES (1,3,301,1,0),(2,4,302,1,0),(3,7,303,1,0),(4,2,304,1,0),(5,10,305,1,0),(6,8,306,1,0),(7,1,307,1,0),(8,6,308,1,0),(9,5,309,1,0),(10,9,310,1,0);


--
-- Dumping data for table `doctor`
--


INSERT INTO `doctor` VALUES (555,'Mercado','Sandra',45678432,'Yupanqui 345 Barrio Savedra',1,'4635372','351284754','mercadosandra@hotmail.com'),(556,'Bustos','Axel',23548642,'Lomas 456 Barrio Las Palmas',2,'4893736','351583832','bustosaxel@hotmail.com'),(557,'Alessio','Angela',74635222,'Angeles 754 Barrio Colonel',3,'4857372','351847636','alessioangela@hotmail.com'),(558,'Quino','Melani',46537821,'Pergaminos 543 Barrio Grisol',4,'4625265','351377483','quinomelani@hotmail.com'),(559,'Aguirre','Hector',58348853,'Florencio 456 Barrio Santinori',5,'4725625','351847636','aguirrehector@hotmail.com'),(560,'Penzo','Sergio',34958483,'Orquete 754 Barrio Isidoro',6,'4625421','351836364','penzosergio@hotmail.com');


--
-- Dumping data for table `abono`
--


INSERT INTO `abono` VALUES (1,1,'Efectivo','Total Pagado',39876,'2023-04-29'),(2,2,'Tarjeta de Credito','2 cuota paga de 6',25015,'2023-03-21'),(3,3,'Efectivo','Total Pagado',10150,'2022-12-12'),(4,4,'Tarjeta de Débito','Total Pagado',14200,'2022-12-15'),(5,5,'Efectivo','Total  Pagado',22864,'2023-01-13'),(6,6,'Tarjeta de Crédito','5 cuotas pagas de 6',43000,'2022-12-22'),(7,7,'Tarjeta de Débito','Total Pagado',20100,'2022-08-30'),(8,8,'Efectivo','Total Pagado',34445,'2022-03-29'),(9,9,'Tarjeta de Crédito','3 cuota paga de 6',62510,'2023-03-11'),(10,10,'Tarjeta de Débito','1 cuota paga de 6',31000,'2023-04-01');


--
-- Dumping data for table `servicio`
--


INSERT INTO `servicio` VALUES (1,1,'Consulta','Pagado',15000,'2023-03-14'),(2,2,'Tratamiento','Pagado',25000,'2023-04-24'),(3,3,'Examen','Pagado',32000,'2023-05-10'),(4,4,'Diagnostico','Pagado',13500,'2023-02-28'),(5,5,'Control','Pagado',12000,'2023-05-12');

