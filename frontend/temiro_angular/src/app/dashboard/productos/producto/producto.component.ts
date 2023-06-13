import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { datosExtra } from '../datos-extra';


@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

    private apiUrl = "http://localhost:8000/webapi";
    public prodBack: any[] = [];
    public prodFront: any[] = [];

    constructor(private http: HttpClient, private router: Router){
    }

    ngOnInit(): void {
        this.obtenerProductos();
    }

    obtenerProductos() {
        this.http.get<any[]>(this.apiUrl+"/producto").subscribe(resp => {
            // console.log(resp);
            this.prodBack = resp;
            for (let p of this.prodBack) {
                let img = "none.jpg";
                for (let dx of datosExtra) {
                    // console.log(dx.idproducto , Number(p.idproducto) );
                    if (dx.idproducto==Number(p.idproducto)) {
                        img = dx.imagen;
                        break;
                    }
                }
                this.prodFront.push({
                    "idproducto": p.idproducto,
                    "descripcion": p.descripcion,
                    "precio": p.precio,
                    // los productos en el front tienen campos adicionales
                    "stock": "Disponible",           // falta traer el verdadero stock
                    "categoria": p.idtipoproducto,   // falta convertir el numero a descripcion
                    // datos extras por ahora solo en el front
                    "imagen": "../../assets/img/"+img
                });
            }
        });
    }

}
