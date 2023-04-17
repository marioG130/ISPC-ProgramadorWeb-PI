
import mysql.connector
from AccesoDatos import ConexionDB

class Usuario(ConexionDB):
    def __init__(self):
        super().__init__()
        self.id = None
        self.apellido = None
        self.nombre = None
        self.email = None
        self.password = None
        self.aceptaTC = None

    def __str__(self):
        return str(self.id) + ' - ' + self.apellido + ', ' + self.nombre + ' ' + self.email
        
    def insertar(self,id,apellido,nombre,email,aceptaTC):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                query = "insert into Usuario (idUsuario, apellido, nombre, email, password, aceptaTC) " \
                        "values (%s, %s, %s, %s, '', %s)"
                datos = (id, apellido, nombre, email, aceptaTC)
                cursor.execute(query,datos)
                self.conexion.commit()
                self.id = id
                self.apellido = apellido
                self.nombre = nombre
                self.email = email
                self.aceptaTC = aceptaTC                
            except mysql.connector.Error as e:
                print("Error al insertar ", e)
        
    def modificar(self,apellido=None,nombre=None,email=None,password=None):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                if apellido is not None:
                    query = "update Usuario set apellido = %s where idUsuario = %s "
                    datos = (apellido, self.id)
                    cursor.execute(query, datos)                    
                    self.conexion.commit()
                    self.apellido = apellido                    
                if nombre is not None:
                    query = "update Usuario set nombre = %s where idUsuario = %s "
                    datos = (nombre, self.id)
                    cursor.execute(query, datos)
                    self.conexion.commit()
                    self.nombre = nombre
                if email is not None:
                    query = "update Usuario set email = %s where idUsuario = %s "
                    datos = (email, self.id)
                    cursor.execute(query, datos)                    
                    self.conexion.commit()
                    self.email = email
                if password is not None:
                    query = "update Usuario set password = %s where idUsuario = %s "
                    datos = (password, self.id)
                    cursor.execute(query, datos)                    
                    self.conexion.commit()
                    self.password = password
            except mysql.connector.Error as e:
                print("Error al actualizar ", e)
    
    def eliminar(self):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                query = "delete from Usuario where idUsuario = %s "
                datos = (self.id,)
                cursor.execute(query, datos)
                self = None
            except mysql.connector.Error as e:
                print("Error al borrar ", e)



### Pruebas
# user1 = Usuario();
# user2 = Usuario();
# user1.insertar(76,'Perez','Jose','jperez@mail.com',True)
# user2.insertar(77,'Rodriguez','Benito','brodriguez@mail.com',True)
# print('user1 antes  = ',user1)
# user1.modificar(nombre='Jose Alberto')
# print('user1 despues= ',user1)
# user2.eliminar()

