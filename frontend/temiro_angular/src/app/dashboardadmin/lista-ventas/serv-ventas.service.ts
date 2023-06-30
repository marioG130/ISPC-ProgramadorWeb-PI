import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map }           from 'rxjs/operators';
import { Venta }         from './venta.model';

@Injectable({
  providedIn: 'root'
})
export class ServVentasService {

    private http: HttpClient;
    private apiUrl = "http://localhost:8000/webapi";

    constructor(h: HttpClient) {
        this.http = h;
    }

    public traerVentas(): Observable<Venta[]> {
        return this.http.get(this.apiUrl+"/venta").pipe(
            map((resp:any) => resp.json())
        );
    }

}
