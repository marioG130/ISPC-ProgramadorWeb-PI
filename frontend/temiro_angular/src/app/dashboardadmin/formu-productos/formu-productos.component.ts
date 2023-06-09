import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './formu-productos.component.html',
  styleUrls: ['./formu-productos.component.css']
})
export class    FormuProductosComponent implements OnInit {
  
  
    formProducto!: FormGroup;
  
  productos: any[] = [];
  nuevoProducto: any = {};

  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router){
    this.formProducto = this.fb.group({
    idproducto: ['', ''],
    descripcion: ['', ''],
    idtipoproducto: ['', ''],
    preciocosto: ['', ''],
    precio: ['', ''],
    fechaingreso: ['', ''],
});
 }

  ngOnInit(): void {
    this.obtenerProductos();
    this.formProducto.clearValidators();
        this.formProducto.clearAsyncValidators();
  }

  obtenerProductos() {
    this.http.get<any[]>('http://localhost:8000/webapi/producto')
      .subscribe(response => {
        this.productos = response;
      });
  }

  altaProducto(event: Event) {
    event.preventDefault;
    if (this.formProducto.valid) {
        this.http.post<any>("http://localhost:8000/webapi/altaproducto/",this.formProducto.value).subscribe(rest=> {
            alert("Alta de Producto OK");
            this.formProducto.clearValidators();
            this.formProducto.clearAsyncValidators();
        }, err=> {
            alert("Algo salió mal al hacer el alta !")
        });
    } 
    }

    bajaProducto(idproducto: number) {
      if (idproducto && confirm("¿Estás seguro de eliminar este producto?")) {
        this.http.delete<any>(`http://localhost:8000/webapi/bajaproducto/${idproducto}`)
          .subscribe(
            () => {
              alert('Producto eliminado correctamente');
            },
            (err) => {
              alert('Algo salió mal al eliminar el producto');
            }
          );
      }
    }
    }
    
    
   
    


