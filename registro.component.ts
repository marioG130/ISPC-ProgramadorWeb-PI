import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
////Se importan los modulos nesesarios para hacer las validaciones.
import {FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  ////Propiedad Publica que contiene Grupo Formularios
    public signupForm !: FormGroup;
  ///Se inyecta el generador de Formularios dentro del constructor
   constructor(private formBuilder : FormBuilder,private http : HttpClient, private router: Router) {   }
  ///El formulario de registro es = a formBuilder esto ayuda a agrupar bien y tener el control de formulario
   ngOnInit(): void {
     this.signupForm = this.formBuilder.group({
     fullname:[""],
     email:[""],
     username:[""],
     password:[""],
  
  
    }) 
   }
   ////Metodo que cada vez que el usuario de click en registrarse,envia una llamada posterior dentro del servidor JSON Server si el registro es exitoso redirigue al componente login.
   signup(){ 
     this.http.post<any>("http://localhost:3000/RegistroUsuarios",this.signupForm.value)
     .subscribe(rest=>{ 
      alert("Registro Exitoso");
      this.router.navigate(["login"]);
      },err=>{
        alert("Parece que algo salio mal")
      }
      )
     }
    }
