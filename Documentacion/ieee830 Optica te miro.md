# Especificación de requisitos de software

## Proyecto:  Temiro Óptica

## 2023

------------

#### Ficha del documento

| Fecha      | Revisión           | Autor                 | Verificado Dep. Calidad |
| ---------- | ------------------ | --------------------- | ----------------------- |
| 21/04/2023 | <center>1</center> | Mariano Delfino       | Mario Guerra            |
| 06/05/2023 | <center>2</center> | Mariano Delfino       | Tatiana Urbina          |
| 10/06/2023 | <center>3</center> | María Fernanda Moreno | Mario Guerra            |

------------

### Contenido

#### [1) INTRODUCCIÓN](#id1)

1.1 [Propósito](#id2)
1.2 [Alcance](#id3)
1.3 [Personal involucrado](#id4)
1.4 [Definiciones, acrónimos y abreviaturas](#id5)
1.5 [Referencias](#id6)
1.6 [Resumen](#id7)

#### [2) DESCRIPCIÓN GENERAL](#id8)

2.1 [Perspectiva del Producto](#id9)
2.2 [Funciones del Producto](#id9.1)
2.3 [Características de los usuarios](#id10)
2.4 [Restricciones](#id11)

#### [3) REQUISITOS ESPECÍFICOS](#id12)

3.1.1 [Product Backlog US1 a US5](#id13)
3.1.2 [Product Backlog US6 a US10](#id14)
3.1.3 [Product Backlog US11 a US15](#id15)
3.1.4 [Product Backlog US16 aUS20](#id16)
3.1.5 [Product Backlog US21 en adelante](#id17)
3.2 [Sprints](#id18)
3.2.1 [Sprint0](#id19)
3.2.2 [Sprint 1](#id20)
3.2.3 [Sprint 2](#id21)
3.2.4 [Sprint 3](#id22)
3.2.5 [Sprint 4](#id23)

------------

<div id='id1' />

# 1) Introducción

Este documento es una Especificación de Requisitos Software (ERS) para el Sistema de información para el e-commerce de  Temiro Óptica. Esta especificación se ha estructurado basándose en las directrices dadas por el estándar IEEE Práctica Recomendada para Especificaciones de Requisitos Software ANSI/IEEE 830, 1998.
Introducción

<div id='id2' />

#### 1.1 Propósito

El presente documento tiene como propósito definir las especificaciones funcionales, no funcionales para el desarrollo de un sistema de información web correspondiente a un e-commerce de salud visual llamado Temiro Óptica orientado a la gestión y acceso tanto del personal de la entidad como de los potenciales usuarios.

<div id='id3' />

#### 1.2 Alcance

Esta especificación de requisitos se orienta a que el sistema permitirá la gestión completa y organización tanto de productos, servicios específicos del rubro como así también la administración y gestión de los procesos necesarios del e-commerce Temiro Óptica por parte de los Usuarios Administradores, como así también, del lado del cliente, el sistema permitirá el acceso a las opciones de productos, servicios, registros de Usuarios, compras online, etc.

<div id='id4' />

#### 1.3 Personal involucrado

| Nombre                  | Callejas, Gonzalo                 |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrollador                     |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | gonzalocallejas4@gmail.com        |

------------

| Nombre                  | Guerra, Mario                     |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrollador                     |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | mguerra13@gmail.com               |

------------

| Nombre                  | Acosta, Noelia                    |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrolladora                    |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | gonzalocallejas4@gmail.com        |

------------

| Nombre                  | Urbina, Tatiana                   |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrollador                     |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | urbinatatiana077@gmail.com        |

------------

| Nombre                  | Moreno, Maria Fernanda            |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrollador                     |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | ferchy341@yahoo.com.ar            |

------------

| Nombre                  | Prieto, Alejandro                 |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrollador                     |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | aleprieto@mi.unc.edu.ar           |

------------

| Nombre                  | Delfino, Mariano                  |
| ----------------------- | --------------------------------- |
| Rol                     | Desarrollador/Scrum Master        |
| Categoria Profesional   | Estudiante                        |
| Responsabilidad         | Diseño y Programación del sistema |
| Información de contacto | marianod2003@gmail.com            |

------------

<div id='id5' />

#### 1.4 Definiciones, acrónimos y abreviaturas

| <center>Nombre                                     | Descripción                                                                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <center>**Usuario** </center>              | Toda persona que visita el Sitio Web                                                                                                                                                                                                              |
| <center>**Usuario Visitante**</center>     | Persona que visita el sitio web sin haberse registrado                                                                                                                                                                                            |
| <center>**Usuario Registrado**</center>    | Persona que usará el sistema para gestionar procesos previa registración                                                                                                                                                                          |
| <center>**Usuario Administrador**</center> | Persona que Administra el sitio web                                                                                                                                                                                                               |
| <center>**ERS**</center>                   | Especificación de Requisitos del Software                                                                                                                                                                                                         |
| <center>**RF**</center>                    | Requerimiento Funcional                                                                                                                                                                                                                           |
| <center>**RNF**</center>                   | Requerimiento No Funcional                                                                                                                                                                                                                        |
| <center>**Angular**</center>               | Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.                                                      |
| <center>**TypeScript**</center>           | TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases                                |
| <center>**NodeJs**</center>                | es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono                                                       |
| <center>**MySQL**</center>                 | es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo.       |
| <center>**Django**</center>                | Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador.                                                                                            |
| <center>**Python**</center>                | Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, ejemplos: Instagram, Netflix, Spotify, Panda3D, entre otros. |
| <center>**Django Rest Framework**</center> | es un conjunto de herramientas potente y flexible para crear API web.                                                                                                                                                                             |

<div id='id6' />

#### 1.5 Referencias

| Título del Documento     | Referencia |
| ------------------------ | ---------- |
| Standard IEEE 830 - 1998 | IEEE       |

<div id='id7' />

#### 1.6 Resumen

La primera sección del documento está referida a aspectos organizativos en torno al desarrollo del sistema de información: sobre los propósitos y alcances y sobre quién intervendrán en su desarrollo.
En la segunda sección, se proporciona una descripción general sobre la perspectiva, las características y tipos posibles de usuarios y las restricciones del producto.
Y en la tercera sección, se especifican en detalle los requisitos que deberá satisfacer el sistema de información.

<div id='id8' />

# 2) Descripción General

<div id='id9' />

#### 2.1 Perspectiva del Producto

El sistema de información Temiro Óptica  será un producto diseñado para trabajar en entornos WEB, lo que permitirá su utilización intuitiva, rápida y eficaz, además de que permitirá a los usuarios (visitantes/potenciales compradores) el acceso a los diferentes componentes del producto de acuerdo a los roles y permisos otorgados por el sistema.

<div id='id9.1' />

#### 2.2 Funciones del Producto

El sistema de información Temiro Óptica cumple principalmente la función de brindar un servicio de Salud Ocular ofreciendo una amplia gama de productos y servicios altamente calificados, testeados y probados para que nuestros pacientes tengan lo mejor sin descuidar también la estética. Damos siempre lo mejor cuidando la seguriadad y confiabilidad de nuestros pacientes.  

<div id='id10' />

#### 2.3 Características de los usuarios

| Tipo de usuario | Administrador/es                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Formación**   | Manejo de herramientas informáticas avanzadas que permitan el desarrollo integral del proyecto. |
| **Actividades** | Control y manejo del sistema en general                                                         |

------------

| Tipo de usuario | Visitante/s                                                              |
| --------------- | ------------------------------------------------------------------------ |
| Formación       | Manejo básico de entornos web                                            |
| Actividades     | Observa e indaga información de la página web con finalidad informativa. |

------------

| Tipo de usuario | Visitante/s-Potencial/es comprador/es                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Formación       | Manejo básico de entornos web y habilidades digitales para interactuar con los requerimientos del sistema.                                                                                                                                                                           |
| Actividades     | Observa e indaga información del sistema con la finalidad de realizar tareas de registro (hacer “loguin”), consultas exhaustivas sobre las disponibilidades del producto y posibles gestión para su adquisición, así como consultas específicas al administrador/gestor del sistema. |

<div id='id11' />

### 2.4 Restricciones

- Interfaz para ser usada con internet.
- Lenguajes y tecnologías en uso: Angular, NodeJs, TypeScript, MySQL, Django-Python, Django-Rest Framework.
- El sistema de información deberá tener una interfaz sencilla que posibilite un manejo intuitivo para el usuario contemplando estándares de accesibilidad (Tener en cuenta a usuarios de la tercera edad o con disminución visual).

<div id='id12' />

# 3) Requisitos específicos

<div id='id13' />

#### 3.1 Product Backlog

###### US01 - Definición del Nombre del Negocio

* **COMO**: Product Owner (o dueño del negocio y sitio web)…

* **QUIERO**: Que la marca sea simple de recordar, sin perder el profesionalismo y el sentido del oficio a desarrollar. Estético y corto para que se pueda adaptar como app en un futuro próximo.

* **PARA**: Identificación del mismo.

* PROPUESTA DE NOMBRE: TEMIRO

* DEFINICIÓN: Declaración de una persona a otra, que la está observando. Haciendo referencia a la visión, ya que se trata de una óptica. Mostrando interés profesional y atendiendo las necesidades, del cliente o paciente, para ser resueltas con excelencia.

* Te miro: Oración de dos palabras que se unifican en una, y se elige poner en mayúscula para obtener mayor presencia (“TEMIRO”).

------------

###### US02 - Diseño del Logo del Negocio

* **COMO**: Product Owner (o dueño del negocio y sitio web)…

* **NECESITO**: Diseño del Logo del Negocio

* **PARA**: Distinguirnos. El diseño debe ser claro, distintivo y sofisticados a la vez.

* PROPUESTA DE DISEÑO DE LOGO: Se eligió realizar un isologo, que sería la fusión del texto y el dibujo. Impidiendo que estos se presenten por separado.

------------

###### US03 - Diseño del Sitio Web

* **COMO**: Dueño del sitio web.

* **QUIERO**: Que el sitio web tenga un diseño moderno, agradable, sea intuitivo al navegar, fácil de usar también para personas con capacidades diferentes, accesible desde cualquier tipo de dispositivo (computadora de escritorio, notebook, netbook, tablet, celulares, etc).

* **PARA**: Que el visitante del sitio obtenga una experiencia única que lo induzca a registrarse en la aplicación y convertirse en usuario de la misma.

* Descripción: El sitio web debe ser responsive, con un diseño moderno, intuitivo, que cumpla con los criterios de accesibilidad y usabilidad, siguiendo una filosofía de diseño Mobile First (al menos el 80% del tráfico del sitio web va a provenir de teléfonos celulares) que provoque en el visitante una experiencia confortable que lo induzca a convertirse en un usuario de la aplicación con el objetivo final de conseguir una elevada proporción entre visitantes y usuarios efectivos.

------------

###### US04 - Ver Home Page

* **Como**: Dueño.

* **Quiero**: Que la home page cuente con los siguientes enlaces: Home, Quienes Somos, Productos y Detalles, Servicios, Contacto, Registro, Carrito de Compras. 

* **Para**: que el visitante del sitio obtenga una experiencia única que lo induzca a registrarse en la aplicación y convertirse en usuario de la misma.
  Criterios de aceptación:
  El diseñador presentará al dueño del producto diferentes prototipos y éste elegirá el que considere más adecuado de acuerdo a sus expectativas.

---

###### US05 - Ver ¿Quiénes Somos?

* **COMO**: Product Owner (o dueño del negocio y sitio web) …

* **QUIERO**: Un espacio para describir de qué trata nuestro espacio, profesión, qué ofrecemos y cómo.

* **PARA**: Que el visitante pueda interesarse e informarse desde una primera visita. Transmitiendo confianza y brindando atención a sus necesidades desde el comienzo.

* PROPUESTA: Somos una firma que brinda un servicio de alta calidad a la salud visual.
  Con la finalidad de atender las diferentes necesidades de nuestros clientes, contamos con un equipo de profesionales altamente capacitados y dispuestos a brindarle mediante un trato eficiente y cordial, la mejor solución a su problema.

* OFRECEMOS: Asesoramiento personalizado;
  Amplio stock de anteojos y armazones con las mejores marcas del mercado nacional e internacional;
  Descuentos y promociones;
  Atención de obras sociales;
  Stock permanente de lentes de contacto;
  Servicio de repuestos y reparaciones.

------------

<div id='id14' />

###### US06 - Ver Productos

* **COMO**: Usuario

* **QUIERO**: Poder visualizar todos los productos disponibles que tenga la óptica.

* **PARA**: Tener más opciones a la hora de elegir un producto.

* Criterios de aceptación:
  Como usuario: Ingresar al sitio y poder visualizar todos los productos.

------------

###### US07 - Ver Términos y Condiciones

* **Como**: usuario
* **Quiero**: tener pautas claras en cuanto a los términos y políticas de privacidad del sitio.
* **Para**: saber en qué  van a utilizar los datos,si los datos se van a compartir con otras personas, las medidas de seguridad que van a tener los datos,dónde se van a guardar tus datos y qué responsabilidades asume la empresa respecto a los servicios que presta.
* Requerimientos: debe aparecer en el sistema siempre visible en algún sector del footer indistintamente de la pestaña de la página a la que se acceda.
* Criterios de aceptación:la ubicación de la misma no será fija siempre que la misma sea visible,que la información de la misma se actualice cuando surja cualquier cambio de políticas.

------------

###### US08 - Ver Sección FAQ

- **Como**: Usuario

- **Quiero**: Visualizar un registro de preguntas frecuentes

- **Para**: Orientarme cuando tenga dudas con respecto a alguna sección determinada por ejemplo, cómo rellenar el Login

Descripción:

* la sección FAQ deberá tener información actualizada de las preguntas más frecuentes realizadas por los usuarios para hacer dinámico la interacción con el mismo

* Debe contener:
  preguntas realizadas por usuarios con sus respectivas respuestas

* Criterios de aceptación:
  Ser un usuario registrado,
  Ingresar a la cuenta,
  podrá ver las preguntas realizadas por otros usuarios con mayor frecuencia.

------------

###### US09 - Registro de Usuario

* **Como**: usuario(visitante no registrado)
* **quiero**: registrarme en el sitio 
* **para**: poder realizar la compra de productos y poder acceder a las funcionalidades de usuarios registrados.
* Criterios de Aceptación:
1. El cliente una vez ingresado en el sitio si es cliente nuevo pasará a registrar sus datos personales ya mencionados.
2. El cliente puede editar sus datos personales si así lo desea.
3. El campo Nombre,Apellido,Dirección no deben estar vacíos para una registración exitosa.
4. El administrador del sitio podrá ver el listado con todos sus clientes registrados.

------------

###### US10 - Login de Usuario

* **Como**: Usuario No Registrado
* **Quiero**: registrar datos solicitados por el sistema 
* **Para**: acceder a funcionalidades de productos y servicios restringidos a visitantes no registrados.

<div id='id15' />

###### US11 - Pedidos de Usuario

* **Como**: Usuario registrado

* **Quiero**: Realizar un pedido de productos oftalmológicos a la Optica Temiro

* **Para**: Comprar (pagando) por esos elementos

* Descripción: Los usuarios que se hayan previamente registrado en el sitio web, y luego de haber ingresado al mismo (haber hecho "login"), podrán realizar pedidos de cualquiera de los productos y servicios ofrecidos por la Óptica Temiro. Los productos son los que aparecen en el catálogo (con sus respectivos precios), y en los datos del usuario constarán la forma de pago preferida y la dirección y forma de envío preferidas.

* Criterio de aceptación: Un usuario registrado debe poder pedir (comprar) un conjunto de productos e indicar la forma de pago y la dirección del envío.

------------

###### US12 - Trámites de Usuario

* **Como**: Usuario registrado

* **Quiero**: Realizar un trámite en la Óptica Temiro, por ejemplo enviarle una receta

* **Para**: Que con ese trámite, por ejemplo, la Óptica confeccione mis lentes según la receta

* Descripción: Los usuarios que se hayan previamente registrado en el sitio web, y luego de haber ingresado al mismo (haber hecho "login"), podrán realizar los trámites habilitados en el sitio. Por ejemplo podrán hacer consultas sobre productos que no existan en el catálogo, podrán adjuntar recetas para que se elaboren lentes a medida, podrán reservar turnos para atención personalizada.

* Criterio de aceptación: Un usuario registrado, debe poder ingresar al sitio web, y allí debe poder realizar los diversos trámites habilitados por la Óptica.

------------

###### US13 - Historial Acciones de Usuario

* **Como**: Usuario Registrado

* **Quiero**: Consultar el historial de acciones que fuí realizando en el tiempo

* **Para**: Poder ver el estado de las mismas, y las respuestas que tuvieron por parte de la Óptica.

* Descripción: Los usuarios que se hayan previamente registrado en el sitio web, y luego de haber ingresado al mismo (haber hecho "login"), podrán consultar su propio historial de acciones efectuadas: por ejemplo los pedidos de presupuesto, compras, trámites, todos con su fecha y hora en que fueron realizados y el estado o devolución por parte de la Óptica. Este listado de acciones estará ordenado por fecha, y deberá ser posible filtrar el rango de esas fechas.

* Criterio de aceptación: Un usuario registrado, debe poder ingresar al sitio web, y allí debe poder consultar un listado con las acciones realizadas a lo largo del tiempo.

------------

###### US14 - Editar datos de Usuario

* **Como**: Usuario Registrado

* **Quiero**: cambiar información personal

* **Para**: tener mi información personal actualizada tal como cambios de domicilio, teléfono, cambio en la graduación en una receta, etc.

* Descripción:
  se creará una página tipo form para actualizar datos del cliente

* Debe contener:
  form con datos personales ya precargados donde se puedan modificar

* Criterios de aceptación:
  Ser un usuario registrado,
  Ingresar a la cuenta,
  podra ver su información personal

------------

###### US15 - Dashboard de Administración

* **Como**: Dueño

* **Quiero**: una pantalla que muestre las operaciones e historial 

* **Para**: que los usuarios puedan tener registro de lo realizado.

* Descripción: El Dashboard debe mostrar la información actualizada de los productos disponibles y precios.
  El dashboard debe contar con, al menos, los siguientes enlaces que conduzcan a contenidos como:
  Pedidos Pendientes, Nuevo Pedido, Stock de Productos con sus precios, Historial de pedidos, Gestión de datos,
  Operaciones: Conocer el precio del producto seleccionado y poder realizar el pago por transferencia o deposito. Obtener un comprobante de la operación realizada.

* Debe contener:
  Stock Disponible.
  Precios.
  Pedidos (Historial de Pedidos).
  Nuevo Pedido.
  Pedido Pendiente.
  Carrito de Compra (Realizar pago por transferencia o depósito)
  Gestión de Datos.

* Criterios de Aceptación
  Ser un usuario registrado,
  Ingresar a la cuenta,
  Podrá ver las operaciones que podrá realizar.

------------

<div id='id16' />

###### US16 - Consultar Detalles de Pedidos

* **Como**: Usuario Admnistrador

* **Quiero**: Tener información detallada de los pedidos

* **Para**: tener información trascendental para la toma de decisiones con respecto a que es lo que tiene salida y que no

* Descripción:
  se realizará una base de datos con datos de ventas, pedidos, vendedores, marcas, Cristales, clientes.

* Debe contener:
  tablas con bases de datos SQL con los pedidos realizados por los clientes, estadísticas de los pedidos, marcas, cristales

* Criterios de aceptación:
  Ser un usuario Administrador,
  Ingresar a la cuenta,
  podrá ver los pedidos realizados, podrá ver estadisticas de las marcas más vendidas, precios

------------

###### US17 - Obtener Stock de productos

* **Como**: Usuario Administrador 
* **Quiero**: cuantificar el tipo y cantidad de productos más requeridos por los clientes
* **Para**: estimar el estado actual del stock de existentes y faltantes.

------------

###### US18 - Presupuestos Pedidos

* **Como**: Usuario Administrador 
* **Quiero**: especificar una sección (o subsección) de consultas generales 
* **Para**: que los usuarios (no necesariamente registrados) puedan solicitar presupuesto.

------------

###### US19 - Agregar/Eliminar/Actualizar Productos, Precios, Categoría y Stock

* **Como**: Usuario Administrador
* **Quiero**: poder registrar un nuevo producto o su respectiva actualización con su precio, categoría, imagen, stock, etc.
* **Para**: mantener actualizado el inventario del e-commerce.

Criterios de aceptación:
Como Administrador:
1.Si el producto es nuevo se procede a asignarle un código de producto.
2.Para la modificación de la cantidad de un producto,se procede a realizar una búsqueda,ya sea por nombre de producto o por su respectivo código.
3.Mostrar una lista de los productos,la cual servirá como catálogo de productos.

------------

###### US20 - Detalle  del Producto

* **Como**: Usuario

* **quiero**: visualizar toda la información y características acerca de cada producto.

* **para**: poder así decidirme si lo compro.

* Se mostrará la imagen del producto.
  Se mostrará el nombre, la descripción, el precio y el disponibilidad.
  Se podrá suscribir a él o comprarlo, (si el cliente inicio sesión).

------------

<div id='id17' />

###### US21 - Catálogo

* **Como**: Dueño

* **Quiero**: que el sitio web contenga un catálogo con todos los productos y servicios disponibles por la Óptica TeMiro.

* **Para**: tener un control de los productos que se ofrecen

* Los productos del catálogo deben contener código, nombre del producto, marca, precio e imágenes. Deberá aparecer una descripción si se tiene el producto en stock.

###### US22 - Modulo Carrito de Compras

* **Como**: Usuario
* **Quiero**: poder ver y agregar productos al carrito de compra.
* **Para**: tener una experiencia de compra acorde a mis necesidades

Criterios de aceptación:

• Verificar que el usuario pueda agregar y eliminar ítems al carrito de compra.
• Que pueda visualizar el producto con (Nombre,Imagen,Precio).
•La opción de poder comprar.

------------
###### US23 - Categoría de Productos

**- Como**: Administrador:
**- Quiero**: Agregar productos con imagen e información
**- Para**: mostrar los productos en el catalogo correspondiente.

Criterios de Aceptación :

Crear categorías y asociar a un producto nuevo.

Los nuevos productos se asocian a una categoría para su fácil búsqueda.

-----

###### US24 - Pasarela Segura de Pagos

- **Como** : Usuario 
- **Quiero**: contar con una pasarela segura de pagos
- **Para**: que al ingresar mis datos bancarios los mismos sean resguardados y yo poder operar con confianza y seguro.

------------

###### US90 - General - Documentación

* **Como**: Desarrollador
* **Quiero**: Modificar a medida que vamos progresando con tareas las especificaciones IEEE830
* **Para**: Adecuar al desarrollo del programa las especificaciones

------------

###### US91 - General - Develop

* Tareas generales para el desarrollo del proyecto

* Tareas generales de FRONTEND

* Instalación y mantenimiento stack Angular
  Tareas generales de BACKEND

* Mantenimiento esquema general BBDD
  Instalación y mantenimiento stack Django

------------

###### US92 - General - Deploy

* Tareas generales de deploy del proyecto en los diferentes entornos: desarrollo, pruebas y producción

---

<div id='id18' />

## <center>Sprint 3.2

<div id='id19' />

#### 3.2.1 Sprint 0

| **N° de Sprint**      | 0                                                                                                                                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sprint Backlog**    |                                                                                                                                                                                                                                                                                                           |
| **Responsabilidades** | se solicita el proyecto que han trabajado y aplicado todos los contenidos dados en el módulo de la cursada previa (HTML5, CSS3, BOOTSTRAP, JAVASCRIPT) para extraer recursos necesarios y asi continuar desde ese punto con las nuevas solicitudes. Revisar la estructura web Semántica, responsive (RWD) |
| **Calendario**        | Inicio: 10/04/23 - Finalización: 21/04/23                                                                                                                                                                                                                                                                 |

------------

<div id='id20' />

#### 3.2.2 Sprint 1

| **N° de Sprint**      | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sprint Backlog**    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Responsabilidades** | Convertir los archivos .html del proyecto previo, en una SPA en Angular con módulos (Layouts/Shared y Pages son un ejemplo) con sus components correspondientes. (HOME, REGISTRO, LOGIN, DASHBOARD). Crear módulos y componentes para la tienda virtual o ecommerce. (PRODUCTO o SERVICIOS, PRODUCTO INDIVIDUAL, COMPRA).Subir en la carpeta documentación las tablas actualizadas de la base de datos: Diseño conceptual al que ya hemos visto como DER: Diagrama Entidad-Relación. Diseño Lógico que consta de la Normalización y el Modelo Relacional. Diseño Físico que es el script legible de la DB en MySQL. Crear un Diagrama de Clases y Casos de Uso para facilitar el modelado en POO. |
| **Calendario**        | Inicio: 24/04/23 - Finalización: 05/05/23                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

***

<div id='id21' />

#### 3.2.3 Sprint 2

| **N° de Sprint**      | 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sprint Backlog**    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Responsabilidades** | Crear servicios que consuman un API Rest de prueba. Para realizar las peticiones http, utilizar el servicio de HttpClient. Inyectar a los componentes los correspondientes servicios a fin de que los componentes puedan acceder a los datos y mostrarlos en pantalla. Incluye enlace de datos (Data binding). Incorporar la programación reactiva (asincrónica) mediante observables para la comunicación entre servicios y componentes. Establecer el modelo de base de datos del primer sprint en Django usando clases. Establecer el sistema de usuarios en Django-Admin (registro, login y roles).Crear un ABM de productos/servicios utilizando el panel de control de Django. |
| **Calendario**        | Fecha Inicio = 08/05/2023 -  Fecha de Fin = 21/05/2023                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

***

<div id='id22'/>

#### 3.2.4 Sprint 3

| **Nº de Sprint**      | 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sprint Backlog**    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Responsabilidades** | Incorporar formularios reactivos de Registro y Login para la autenticación y formularios para la manipulación (Alta) de servicios/productos/suscripción, según el caso con sus respectivas validaciones. Deberán estar conformados por input types acorde al dato que se va a ingresar. Deberán informar al usuario mediante mensajes personalizados (Validaciones). Deberán respetar los colores semánticos que propone Bootstrap. Conexión con el backend para el registro e inicio de sesión. Conexión con backend para almacenar los datos de los productos/servicios y detalles de producto/servicios en la DB a través del modelo en Django. Definición de la Api Rest y los endpoints necesarios para las funcionalidades de: Registro de usuarios, Login de usuarios, Registro / Alta de al menos 3 productos/servicios/suscripción ( solo desde el rol Administrador, mediante su panel de control), Tablero de control (Gestión) o Dashboard con módulos planteados en la maquetación del FrontEnd según proyecto: El rol ADMIN pueda ver la lista de usuarios registrados y el listado de los productos/servicios/suscripción según corresponda. El rol USUARIO registrado solo que pueda ver su Dashboard para editar su perfil. Los datos serán consumidos desde la Base de datos MySQL. |
| **Calendario**        | Fecha Inicio = 22/05/2023 -  Fecha de Fin = 04/06/2023                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

***

<div id='id23'/>

#### 3.2.5 Sprint 4

| **Nº de Sprint**      | 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sprint Backlog**    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Responsabilidades** | Funcionalidades completas (front + back integrado): Tablero de control para usuarios: Mostrar catálogo (mínimo 3 productos o servicios o suscripción). Seleccionar para comprar. Simular Pago con API Mercado Pago o similar. Tablero de control administrador CRUD básico funcional de producto y cliente. Actualizar documentación IEEE830 - tablero Kanban (project) y Wiki. Actualizado todo el proyecto en GitHub como respaldo. Demo final en video con participación de todo el equipo describiendo todas las funcionalidades. |
| **Calendario**        | Fecha Inicio = 05/06/2023 -  Fecha de Fin = 18/06/2023                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

***