import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { datosExtra } from '../datos-extra';

export class DetProducto {
    idproducto: number;
    descripcion: string;
    precio: number;
    detalle: string;
    especificaciones: string;
    imagen: string;

    constructor() {
        this.idproducto = 0;
        this.descripcion = "";
        this.precio = 0;
        this.detalle = "";
        this.especificaciones = "";
        this.imagen = "";
    }
}

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.component.html',
    styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

    private apiUrl = "http://localhost:8000/webapi";
    public prd: DetProducto;

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
        this.prd = new DetProducto();
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramsMap => {
            this.obtenerProducto(paramsMap.get('idproducto')!);
        })
    }

    obtenerProducto(idprd: string) {
        let idproducto = Number(idprd);
        this.http.get<any>(this.apiUrl+"/producto/"+idprd).subscribe(resp => {
            this.prd.idproducto = idproducto;
            this.prd.descripcion = resp.descripcion;
            this.prd.precio = resp.precio;
            this.prd.detalle = '...';
            this.prd.especificaciones = '...';
            this.prd.imagen = "../../assets/img/none.jpg";
            for (let dx of datosExtra) {
                if (dx.idproducto==idproducto) {
                    this.prd.detalle = dx.detalle;
                    this.prd.especificaciones = dx.especificaciones;
                    this.prd.imagen = "../../assets/img/"+dx.imagen;
                    break;
                }
            }
        });
    }
}
