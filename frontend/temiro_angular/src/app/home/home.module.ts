import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/FooterComponent';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TermycondicionesComponent } from './termycondiciones/termycondiciones.component';
import { CarrocomprasComponent } from '../dashboard/carrito/carrocompras.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    QuienesSomosComponent,
    ContactoComponent,
    TermycondicionesComponent,
    CarrocomprasComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    ]


})
export class HomeModule { }
