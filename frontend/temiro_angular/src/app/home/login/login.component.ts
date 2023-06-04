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
    loginForm: FormGroup;
    url: string = 'http://127.0.0.1:8000/webapi/usuario';
    
    
    constructor(public fb: FormBuilder, private http : HttpClient, private router : Router) {
       this.loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      });
    }
    public getLocations() {
        this.http.get(this.url).toPromise().then((data) => {
        console.log(data);
        });
        }
    ngOnInit() {}
    login() {
        this.http.get<any>(this.url).subscribe(res=> {
                    const user = res.find((a:any)=>{
                        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
                    });
            if(user) {
                alert("Ingreso Exitoso");
                this.router.navigate(["productos"])
            } else {
                alert("Usuario no encontrado !");
           }
         }) 
        }
        }
        
     
 
 
 
 
 
 
 
 
 
 
 
/*loginForm: FormGroup;

resultado!: string;

constructor(public fb: FormBuilder, private http : HttpClient, private router : Router) {
   this.loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
  });
}

ngOnInit() {

}
login() {
    this.http.get<any>("http://localhost:8000/webapi/usuario").subscribe(res=> {
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



/*public loginForm!: FormGroup
    loginForms: any;   
    constructor(private FormBuilder: FormBuilder, private http : HttpClient,private router : Router) {}
ngOnInit(): void {
        this.loginForm = this.FormBuilder.group({username:[""],password:[""]})
    }
login() {
        this.http.get<any>("http://localhost:8000/webapi/usuario?search=jonasdiaz").subscribe(res=> {
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