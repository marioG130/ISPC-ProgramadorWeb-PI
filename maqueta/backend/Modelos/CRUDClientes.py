import mysql.connector 

class conectar():
    def __init__(self) -> None:
        try:
            self.conexion.is_connected = mysql.connector.connect(
                host= 'localhost',
                port= 3306,
                user= 'root',
                password= '',
                bd= 'OpticaTeMiro'
            )
        except mysql.connector.Error as descripcionError:
            print("No se pudo conectar a la Base de Datps", descripcionError)

#PRIMERA OPERACION INSERT
def NuevoCliente(self, DNIcliente, apelllido, nombre, direccion, telefono, email, fechaNac):
    if self.conexion.is_connected():
        try:
            cursor= self.conexion.cursor()
            sentenciaSQL="INSERT INTO Cliente VALUES (%s,%s,%s,%s,%s,%s,%s)"
            data=(DNIcliente, apelllido, nombre, direccion, telefono, email, fechaNac)

            cursor.execute(sentenciaSQL.data)
            self.conexion.commit()
            self.conexion.close()
        except:
            print("No se pudo realizar la conexion a la base de datos")
        finally:
            if self.conexion.is_connected():
                self.conexion.close()
                print("Su conexion ah cerrado")

#SEGUNDA OPERACION DEL CRUD: READ O LEER
    def BuscarCliente(self, nombre):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "SELECT * FROM Cliente where nombre like '%MAR%' "
                cursor.execute(sentenciaSQL)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo concectar a la base de datos")
            
            finally:
                if self.conexion.is_connected():
                   self.conexion.close()
                   print("Se ah cerrado la conexión con la Base de Datos")

#TERCERA OPERACION DEL CRUD: UPDATE
    def ModificarCliente(self, nombre):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE Cliente SET nombre='%s' WHERE Id='%s' "
                cursor.execute(sentenciaSQL)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo concectar a la base de datos")

#CUARTA OPERACION DEL CRUD: DELETE O ELIMINAR
    def EliminarCliente(self,ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from Cliente where id = ID"
                cursor.execute(sentenciaSQL)

                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo concectar a la base de datos")