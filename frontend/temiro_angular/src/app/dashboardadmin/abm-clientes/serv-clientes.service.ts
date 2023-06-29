import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServClientesService {

    private http: HttpClient;
    private apiUrl = "http://localhost:8000/webapi";

    constructor(h: HttpClient) {
        this.http = h;
    }

    public eliminar(idcli: number) {
        if (idcli && confirm("¿Está seguro de eliminar al cliente N° "+idcli+" ?")) {
            this.http.delete<any>(this.apiUrl+"/bajacliente/"+idcli).subscribe(() => {
                alert("Cliente N° "+idcli+" eliminado correctamente");
            }, err=> {
                alert("Algo salió mal al eliminar el cliente");
            });
        }
    }

}
