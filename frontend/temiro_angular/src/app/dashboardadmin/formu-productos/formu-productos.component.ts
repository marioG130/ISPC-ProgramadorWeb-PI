import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formu-productos',
  templateUrl: './formu-productos.component.html',
  styleUrls: ['./formu-productos.component.css']
})
export class FormuProductosComponent implements OnInit {

    formProducto!: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
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
        this.formProducto.clearValidators();
        this.formProducto.clearAsyncValidators();
    }

    public altaProducto(event: Event) {
        event.preventDefault;
        if (this.formProducto.valid) {
            this.http.post<any>("http://localhost:8000/webapi/altaproducto/",this.formProducto.value).subscribe(rest=> {
                alert("Alta de Producto OK");
                this.formProducto.clearValidators();
                this.formProducto.clearAsyncValidators();
            }, err=> {
                alert("Algo salió mal al hacer el alta !")
            });
        } else {
            alert("Hay datos inválidos en el formulario");
            this.formProducto.markAllAsTouched();
        }
    }

    public bajaProducto(event: Event) {
        event.preventDefault;
        alert("Todavía NO implementado !")
        // this.http.post<any>("http://localhost:8000/webapi/bajaproducto/",this.formProducto.value).subscribe(rest=> {
    }

}
