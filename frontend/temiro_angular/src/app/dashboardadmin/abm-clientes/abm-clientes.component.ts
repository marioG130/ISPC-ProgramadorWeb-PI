import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServClientesService } from './serv-clientes.service';

@Component({
  selector: 'app-abm-clientes',
  templateUrl: './abm-clientes.component.html',
  styleUrls: ['./abm-clientes.component.css']
})
export class AbmClientesComponent {

    private apiUrl = "http://localhost:8000/webapi";
    private fb: FormBuilder;
    private http: HttpClient;
    private router: Router;
    private srvcli: ServClientesService;
    formCliente!: FormGroup;
    clientes: any[] = [];
    fCliente: any = {};
    fAccion: string = "Agregar";

    constructor(f: FormBuilder, h: HttpClient, r: Router, s:ServClientesService) {
        this.fb = f;
        this.http = h;
        this.router = r;
        this.srvcli = s;
        this.formCliente = this.fb.group({
            idcliente: ['', [Validators.required]],
            idusuario: ['', [Validators.required]],
            apellido: ['', [Validators.required]],
            nombre: ['', []],
            dni: ['', []],
            direccion: ['', []],
            email: ['', [Validators.required, Validators.email]],
            idciudad: ['', []],
            telefono:['', []],
            celular: ['', []],
            fechanac:['', []],
        });
    }

    ngOnInit(): void {
        this.obtenerClientes();
        this.formCliente.clearValidators();
        this.formCliente.clearAsyncValidators();
    }

    obtenerClientes() {
        this.http.get<any[]>(this.apiUrl+"/cliente").subscribe(resp => {
            // console.log(resp);
            this.clientes = resp;
        });
    }

    enviarCliente(event: Event) {
        event.preventDefault;
        if (this.formCliente.valid) {
            if (this.fAccion == "Agregar") {
                this.http.post<any>(this.apiUrl+"/altacliente/",this.formCliente.value).subscribe(resp => {
                    alert("Alta de Cliente OK");
                    this.obtenerClientes();
                    this.formCliente.reset();
                }, err=> {
                    alert("Algo salió mal al hacer el alta !")
                });
            }
            if (this.fAccion == "Modificar") {
                let idcli = this.formCliente.get("idcliente")?.value;
                this.http.post<any>(this.apiUrl+"/modcliente/"+idcli+"/",this.formCliente.value).subscribe(resp => {
                    alert("Modificación de Cliente OK");
                    this.obtenerClientes();
                    this.formCliente.reset();
                }, err=> {
                    alert("Algo salió mal al hacer la modificación !")
                });
            }
        } else {
            alert("Formulario con datos inválidos !");
        }
    }

    bajaCliente(idcliente: number) {
        // Baja de cliente directa en este mismo método
     /* if (idcliente && confirm("¿Está seguro de eliminar al cliente N° "+idcliente+" ?")) {
            this.http.delete<any>(this.apiUrl+"/bajacliente/"+idcliente).subscribe(() => {
                alert("Cliente N° "+idcliente+" eliminado correctamente");
                this.obtenerClientes();
            }, err=> {
                alert("Algo salió mal al eliminar el cliente");
            });
        } */

        // Baja de cliente usando un servicio
        this.srvcli.eliminar(idcliente).subscribe(data => {
            if (data) {
                // Si elimina el cliente se actualiza la lista de clientes
                this.obtenerClientes();
            }
        });
    }

    modificarCliente(idcliente:number, idusuario:number, apellido:string, nombre: string,
                     dni:number, direccion:string, email:string) {
        this.fAccion = "Modificar";
        this.fCliente.idcliente = idcliente;
        this.fCliente.idusuario = idusuario;
        this.fCliente.apellido = apellido;
        this.fCliente.nombre = nombre;
        this.fCliente.dni = dni;
        this.fCliente.direccion = direccion;
        this.fCliente.email = email;
        // falta traer los siguientes campos al formulario
        this.fCliente.idciudad = 1;
        this.fCliente.telefono = '12345';
        this.fCliente.celular = '67890';
        this.fCliente.fechanac = '2023-06-09';
        alert("Se cargaron los datos en el formulario inferior.\n"+
              "Puede editarlos para hacer cambios.\n");
    }
}
