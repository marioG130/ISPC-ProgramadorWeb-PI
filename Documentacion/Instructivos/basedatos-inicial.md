# Inicializar DataBase

## Instrucciones para generar la DB:

* Se debe instalar MySQL o MariaDB de la forma estándar, puede ser sobre GNU/Linux o sobre Windows. Como parte del proceso de instalación se deberá definir el password del usuario "root" de la base de datos (ese password NO será usado en nuestro proyecto).

* Ingresar como usuario "root" (puede ser via consola con el comando "mysql" o usando un programa como Workbench o DBeaver) y ejecutar los siguientes comandos para crear el usuario y la database a utilizar en el proyecto de la Optica Temiro:

        > create user usertm@localhost identified by 'passtm.40';
        > create database OpticaTeMiroDb;
        > grant all on OpticaTeMiroDb.* to usertm@localhost with grant option;
        > flush privileges;

* Para crear todas las tablas definidas hasta el momento, ejecutar el siguiente script SQL "create-tables.sql" que está ubicado en el propio repositorio en la ubicación "backend/design/generate-sql". También se puede copiar y pegar el contenido del script en el programa usado. Observar que este script borra completamente todas las tablas y su contenido, por lo que deberán generarse nuevos script para llenar las tablas con datos relacionados.
