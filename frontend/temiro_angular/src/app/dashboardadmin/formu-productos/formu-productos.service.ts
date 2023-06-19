import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    private apiUrl = "http://localhost:8000/webapi";

    constructor(private http: HttpClient) {
    }

    getProductos(): Observable<any> {
        return this.http.get(this.apiUrl+"/producto");
    }

    agregarProducto(producto: any): Observable<any> {
        return this.http.post(this.apiUrl+"/altaproducto", producto);
    }

    eliminarProducto(id: number): Observable<any> {
        const url = "${this.apiUrl}${id}/";
        return this.http.delete(url);
    }
}
