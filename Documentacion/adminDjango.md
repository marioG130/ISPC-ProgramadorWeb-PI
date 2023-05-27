### Creación de Usuarios y Grupos en Django Admin:

Debemos ingresar con la cuenta de superusuario creada, en el caso de nuestro proyecto: 

usuario: admin
contraseña: temiro.40

En el panel Izquierdo, seleccionamos la opción de usuario y agregamos los usuarios que necesitemos.

[https://i.postimg.cc/430C7nQ0/creacion-US.png]

| Usuario      | Contraseña |
| --------- | -----:|
| fernandatm | admin.40 |
| marianotm     |   admin.40 |
| noeliatm      |    admin.40 |

Al Actualizar Base de Datos podrémos ver los Usuarios ingresados desde el panel de admin de django, realizando la consulta SELECT * FROM opticatemiro.auth_user

[https://i.postimg.cc/gjPT8hXg/US-BD.png]

Para crear los grupos y roles de los usuarios debemos crear los grupos y asignar el usuario correspondiente a cada grupo. Para que el usuario pueda ingresar con su nombre de usuario y contraseña debemos asignarle el permiso de Es staff.
[https://i.postimg.cc/N05ScBvk/permisos-grup.png]

Se crearon 3 grupos: 

[https://i.postimg.cc/sgfbT5n8/per-grup.png]

Al actualizar la Base de Datos y realizar la consulta SELECT * FROM opticatemirodb.auth_user_user_groups podemos ver la tabla con los grupos creados. 
[https://i.postimg.cc/9XZ30mRx/grup-bd.png]

Se agregan los usuarios para cada uno de los grupos y los permisos:

[https://i.postimg.cc/RV9MCqRR/per-us-gr.png]

[https://i.postimg.cc/X78nr310/permis-us-gr.png]

[https://i.postimg.cc/zDTz1Tnv/permiso-us-grupo.png]

En la base de datos realizando la consulta SELECT * FROM opticatemirodb.auth_user_user_permissions; Se puede observar la tabla con el id de grupo, el user_id y los permisos que posse

[https://i.postimg.cc/9Mw6GVxQ/act-bd-grupos.png]

Al cerrar sesión e ingresar con alguno de los usuarios asignados a los grupos podremos ver los permisos correspondiente a cada grupo asignados anteriormente.

[https://i.postimg.cc/Kv26g6tm/ingresar-us.png]

[https://i.postimg.cc/Z5TzXGqw/us-perm-gr.png]

[https://i.postimg.cc/XY2mmXmv/perm-us-gr.png]

[https://i.postimg.cc/0QS4znQ6/permisos-us.png]

Desde el panel de admin de Django si el usuario tiene permiso de agregar un usuario  lo puede hacer como en la imagen a continuación. 

[https://i.postimg.cc/jd4G6MhP/perm-us.png]

Al actualizar la base de datos y realizar la consulta SELECT * FROM opticatemirodb.usuario podemos ver el usuario agregado desde el panel de administración de django

[https://i.postimg.cc/J0bS2xCw/agrega-us-desde-usadmin.png]