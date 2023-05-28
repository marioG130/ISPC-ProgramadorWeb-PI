import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    myForm: FormGroup;
    resultado!: string;

    constructor(
      public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        fullname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      });
    }
   ngOnInit() { }
   
   submit(){
      console.log(this.myForm.value);
      if (this.myForm.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
    
    
    }

  
    }

    /* Propiedad Publica que contiene Grupo Formularios
    public signupForm !: FormGroup;

    // Se inyecta el generador de Formularios dentro del constructor
    constructor(private formBuilder : FormBuilder,private http : HttpClient, private router: Router) {

    }

    // El formulario de registro es = a formBuilder esto ayuda a agrupar bien y tener el control de formulario
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            fullname:[""],email:[""],username:[""],password:[""]})
    }

    // Metodo que cada vez que el usuario de click en registrarse, envia una llamada posterior dentro del
    // servidor JSON Server si el registro es exitoso redirigue al componente login.
    signup() {
        this.http.post<any>("http://localhost:3000/RegistroUsuarios",this.signupForm.value).subscribe(rest=> {
            alert("Registro Exitoso");
            this.router.navigate(["login"]);
            }, err=> {
                alert("Algo salió mal en el registro !")
            });
    }
}*/
