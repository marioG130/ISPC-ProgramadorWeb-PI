import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './formu-productos.component.html',
  styleUrls: ['./formu-productos.component.css']
})
export class FormuProductosComponent implements OnInit {

  formProducto!: FormGroup;
  productos: any[] = [];
  nuevoProducto: any = {};
  modificarProductoId: number | null = null;
  private apiUrl = "http://localhost:8000/webapi";

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.formProducto = this.fb.group({
      idproducto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      idtipoproducto: ['', [Validators.required]],
      preciocosto: ['', []],
      precio: ['', []],
      fechaingreso: ['', []],
    });
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.formProducto.clearValidators();
    this.formProducto.clearAsyncValidators();
  }

  obtenerProductos() {
    this.http.get<any[]>(this.apiUrl+"/producto").subscribe(resp => {
      this.productos = resp;
    });
  }

  guardarProducto(event: Event) {
    event.preventDefault();
    if (this.formProducto.valid) {
      if (this.modificarProductoId) {
        this.modificarProducto();
      } else {
        this.agregarProducto();
      }
    }
  }

  agregarProducto() {
    this.http.post<any>(this.apiUrl+"/altaproducto/", this.formProducto.value).subscribe(resp => {
      alert("Alta de Producto OK");
      this.obtenerProductos();    // para actualizar la lista
      this.formProducto.reset();
    }, err=> {
      alert("Algo salió mal al hacer el alta !");
    });
  }

  modificarProducto() {
    if (this.formProducto.valid) {
      const idproducto = this.nuevoProducto.idproducto;
      this.http.put<any>(`${this.apiUrl}/modproducto/${idproducto}/`, this.formProducto.value).subscribe(
        (resp) => {
          alert("Producto modificado correctamente");
          this.obtenerProductos(); // para actualizar la lista
          this.formProducto.reset();
        },
        (err) => {
          alert("Algo salió mal al modificar el producto");
        }
      );
    }
  }

  bajaProducto(idproducto: number) {
    if (idproducto && confirm("¿Estás seguro de eliminar este producto?")) {
      this.http.delete<any>(this.apiUrl+"/bajaproducto/"+idproducto).subscribe(() => {
        alert("Producto eliminado correctamente");
        this.obtenerProductos();    // para actualizar la lista
      }, err=> {
        alert("Algo salió mal al eliminar el producto");
      });
    }
  }

  seleccionarProducto(producto: any) {
    this.modificarProductoId = producto.idproducto;
    this.formProducto.patchValue(producto);
  }
}