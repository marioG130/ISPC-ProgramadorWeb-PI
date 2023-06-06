import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;
    usuario?: string;
    password?: string;
  showPasswordRequiredMessage?: boolean;
  showUserRequiredMessage?: boolean;

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
        this.formLogin = this.fb.group({
            usuario: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        });
    }

    ngOnInit(): void {
        this.formLogin.clearValidators();
        this.formLogin.clearAsyncValidators();
    }

    get Usuario() {
        return this.formLogin.get("usuario");
    }

    get Password() {
        return this.formLogin.get("password");
    }
    onFocus(): void {
        this.showPasswordRequiredMessage = true;
        this.showUserRequiredMessage = true;
      }

    public ingresar(event: Event) {
        event.preventDefault;
        // console.log(this.formLogin.value);
        if (this.formLogin.valid) {
            // Lo siguiente fue realizado para pruebas locales del frontend con JSON-SERVER
            // this.http.get<any>("http://localhost:3000/RegistroUsuarios").subscribe(res=> {
            this.http.post<any>("http://localhost:8000/webapi/login/",this.formLogin.value).subscribe(rest=> {
                alert("Login Exitoso");
                this.formLogin.clearValidators();
                this.formLogin.clearAsyncValidators();
                let usr = this.formLogin.get("usuario")?.value;
                // console.log("usuario = "+usr);
                if (usr == "admin") {
                    this.router.navigate(["indiceadm"]);
                } else {
                    this.router.navigate(["indice"]);
                }
            }, err=> {
                alert("Algo salió mal en el ingreso !")
            });
        } else {
            alert("Datos incorrectos !")
            this.formLogin.markAllAsTouched();
        }
    }
}
