import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    myForm: FormGroup;

    resultado!: string;



    constructor(
      public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      });
    }
   ngOnInit() { }
   saveData(){
      console.log(this.myForm.value);

      if (this.myForm.valid)
      this.resultado = "Ingreso Exitoso";
    else
      this.resultado = "Usuario y Contraseña Invalidos";


    }
  
  }


 



    /* Propiedad publica de inicio de sesion
    public loginForm!: FormGroup
    loginForms: any;

    // Se inyecta dentro del constructor el generador de formularios
    constructor(private FormBuilder: FormBuilder, private http : HttpClient,private router : Router) {

    }

    // se validan el usuario y la contraseñ
    ngOnInit(): void {
        this.loginForm = this.FormBuilder.group({username:[""],password:[""]})
    }

    // Metodo Inicio de sesion
    login() {
        this.http.get<any>("http://localhost:3000/RegistroUsuarios").subscribe(res=> {
                        const user = res.find((a:any)=> {
                        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
                    });
            if(user) {
                alert("Ingreso Exitoso");
                this.router.navigate(["productos"])
            } else {
                alert("Usuario no encontrado !");
            }
        }, Err=> {
            alert("Algo salio mal al hacer login !");
        })
    }
}*/
