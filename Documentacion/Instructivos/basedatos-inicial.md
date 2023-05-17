# Inicializar DataBase

## Instrucciones para generar la DB:

* Se debe instalar MySQL o MariaDB de la forma estándar, puede ser sobre GNU/Linux o sobre Windows. Como parte del proceso de instalación se deberá definir el password del usuario "root" de la base de datos (ese password NO será usado en nuestro proyecto).

* Ingresar como usuario "root" (puede ser via consola con el comando "mysql" o usando un programa como Workbench o DBeaver) y ejecutar los siguientes comandos para crear el usuario y la database a utilizar en el proyecto de la Optica Temiro. Para crear todas las tablas se ejecuta el script "create-tables.sql" que está ubicado en el propio repositorio en la ubicación "backend/database/". Alternativamente se puede copiar y pegar el contenido del script en el programa usado. A continuación se muestran todos los comandos desde el prompt del programa "mysql" ingresando como "root" y estando ubicados en la carpeta que contiene al script :

        > show databases;
        > select user,plugin,password from mysql.user;  
        > create user usertm@localhost identified by 'passtm.40';
        > create database OpticaTeMiroDb;
        > grant all on OpticaTeMiroDb.* to usertm@localhost with grant option;
        > flush privileges;
        > \u OpticaTeMiroDb
        > \. create-tables.sql
        > \q

* Observar que el script "create-tables.sql" borra completamente todas las tablas y su contenido, por lo que deberán generarse nuevos scripts para llenar las tablas con datos relacionados entre si. El script "create-tables.sql" debe usarse cada vez que se hagan cambios a la estructura de las tablas para empezar todo desde cero.


## Carga inicial de datos a la DB:

Se debe ejecutar el script "insertar-datos.sql" ubicado en el repositorio. Puede ser ejecutado desde Workbench o DBeaver, o bien desde el programa de consola "mysql". A continuación se describe la ejecución desde el prompt usando la misma conexión que el proyecto de Django:

        $ cd < donde este la carpeta backend/temiro_django >
        $ python manage.py dbshell
        [OpticaTeMiroDb]> show tables;                          --> 25 rows
        [OpticaTeMiroDb]> \. ../database/insertar-datos.sql
        [OpticaTeMiroDb]> select * from producto;               --> 10 rows    
        [OpticaTeMiroDb]> \q
