import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/FooterComponent';
import { BodyComponent } from './home/body/body.component';
import { RegistroComponent } from './home/registro/registro.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';
import { LoginComponent } from './home/login/login.component';
import { CarrocomprasComponent } from './dashboard/carrito/carrocompras.component';
import { TermycondicionesComponent } from './home/termycondiciones/termycondiciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    CarrocomprasComponent,
    TermycondicionesComponent,
    
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//LoginService; dentro de provider?
