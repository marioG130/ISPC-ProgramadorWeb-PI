import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/FooterComponent';
import { BodyComponent } from './home/body/body.component';
import { RegistroComponent } from './home/registro/registro.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarrocomprasComponent } from './dashboard/carrito/carrocompras.component';
import { TermycondicionesComponent } from './home/termycondiciones/termycondiciones.component';

//import { LoginServive } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    RegistroComponent,
    QuienesSomosComponent,
    LoginComponent,
    DashboardComponent,
    CarrocomprasComponent,
    TermycondicionesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//LoginService; dentro de provider?