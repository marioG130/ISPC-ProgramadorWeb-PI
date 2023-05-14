import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
 
//import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

/////Propiedad publica de inicio de sesion 
  public loginForm!: FormGroup
  loginForms: any;
  /////Se inyecta dentro del constructor el generador de formularios
  constructor(private FormBuilder: FormBuilder, private http : HttpClient,private router : Router)   {  }
  
////se validan el usuario y la contraseña 
  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
     username:[""],
     password:[""],

    })
    
  }
  /////Metodo Inicio de sesion
  login(){
    this.http.get<any>("http://localhost:3000/RegistroUsuarios")
      .subscribe(res=>{
         const user = res.find((a:any)=>{
             return a.username  === this.loginForm.value.username && a.password  === this.loginForm.value.password
      });
    if(user){
      alert("ingreso exitoso!!");
      
      this.router.navigate(["carrito"]) 
    }else{
      alert("usuario no encontrado!!");
    }
    },Err=>{
          alert("algo salio mal!!");
      })
   } 
   }