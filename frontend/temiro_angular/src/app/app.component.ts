import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temiro_angular';
}

//export class AppComponent implements OnInit{ constructor(private loginService:LoginService){}
//ngOnInit(): void{};
//estaLogeado(){ return this.loginService.estaLogueado();} logout(){ this.loginService.logout();}}
