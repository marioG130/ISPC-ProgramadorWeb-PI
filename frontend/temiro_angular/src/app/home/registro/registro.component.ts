import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    formRegistro!: FormGroup;  // propiedad publica que contiene al formulario del HTML
    formBackend!: FormGroup;   // formulario a enviar al backend
    fueValidado: boolean;
    datosValidados!: string;
    datosRegistrados!: string;

    // El formulario de registro es un formBuilder, esto ayuda a agrupar bien y tener el control de formulario
    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
        this.formRegistro = this.fb.group({
            fullname: ['', [Validators.required]],
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
            checkbox: [false, Validators.requiredTrue],
        });
        this.fueValidado = false;
        this.datosValidados = "";
        this.datosRegistrados = "";
    }

    ngOnInit(): void {
        this.formRegistro.clearValidators();
        this.formRegistro.clearAsyncValidators();
    }

    get Fullname() {
        return this.formRegistro.get("fullname");
    }

    get Username() {
        return this.formRegistro.get("username");
    }

    get Email() {
        return this.formRegistro.get("email");
    }

    get Password() {
        return this.formRegistro.get("password");
    }

    get Checkbox() {
        return this.formRegistro.get("checkbox");
    }

    public registrarse(event: Event) {
        event.preventDefault;
        // console.log(this.formRegistro.value);
        if (this.formRegistro.valid) {
            this.fueValidado = true;
            this.datosValidados = "Todos los datos son válidos";
            // Generamos un ID de usuario aleatorio por encima de 1000 (por debajo son para cargas manuales)
            let numAlea = Math.floor((Math.random()*9999)+1000);
            this.formBackend = new FormGroup({
                idusuario : new FormControl(numAlea),
                tipousuario : new FormControl(2),    // tipo = 2 para auto-registro desde el frontend
                usuario : new FormControl(this.formRegistro.get("username")?.value),
                password : new FormControl(this.formRegistro.get("password")?.value),
                email : new FormControl(this.formRegistro.get("email")?.value),
                aceptatc : new FormControl(1),
            });
            // console.log(this.formBackend.value);
            // Lo siguiente fue realizado para pruebas locales del frontend con JSON-SERVER
            // this.http.post<any>("http://localhost:3000/RegistroUsuarios",this.signupForm.value).subscribe(rest=> {
            this.http.post<any>("http://localhost:8000/webapi/registro/",this.formBackend.value).subscribe(rest=> {
                alert("Registro Exitoso");
                this.datosRegistrados = "Registro OK";
                this.formRegistro.clearValidators();
                this.formRegistro.clearAsyncValidators();
                this.router.navigate(["indice"]);
            }, err=> {
                alert("Algo salió mal en el registro !")
                this.datosRegistrados = "Error al registrar !";
            });
        } else {
            this.formRegistro.markAllAsTouched();
            this.datosValidados = "Hay datos inválidos en el formulario";
            this.datosRegistrados = "";
        }
    }
}
