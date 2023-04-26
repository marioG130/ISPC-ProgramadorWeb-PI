
import mysql.connector

class ConexionDB:
    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(host='localhost', port=3306,
                                                    user='user66', password='pass66',
                                                    database='OpticaTeMiroDb')            
        except mysql.connector.Error as e:
            print("No se pudo conectar a la Base de Datos", e)
            
