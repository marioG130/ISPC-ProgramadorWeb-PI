import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { Venta }             from './venta.model';
import { ServVentasService}  from './serv-ventas.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {

    private http: HttpClient;
    private apiUrl = "http://localhost:8000/webapi";
    private srvvnt: ServVentasService;
    public ventas : Venta[];

    constructor(h: HttpClient, s: ServVentasService) {
        this.http = h;
        this.srvvnt = s;
        this.ventas = [];
    }

    ngOnInit(): void {
        this.obtenerVentas();
    }

    obtenerVentas() {
        // Directamente llamando a la API
        this.http.get<any[]>(this.apiUrl+"/venta").subscribe(resp => {
               this.ventas = resp;
        });
        // Llamando al servicio
        // this.ventas = this.srvvnt.traerVentas();
    }

}
