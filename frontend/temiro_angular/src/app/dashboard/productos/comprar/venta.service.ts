import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'http://localhost:8000/webapi';

  constructor(private http: HttpClient) { }

  insertarVenta(detallesVenta: any): Observable<any> {
    const url = `${this.apiUrl}/altadetalleventa`;
    return this.http.post(url, detallesVenta);
  }
}