import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrocomprasComponent } from './dashboard/carrito/carrocompras.component';
import { BodyComponent } from './home/body/body.component';
import { TermycondicionesComponent } from './home/termycondiciones/termycondiciones.component';
import { RegistroComponent } from './home/registro/registro.component';
import {FaqComponent } from './home/faq/faq.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { LoginComponent } from './home/login/login.component';


const routes: Routes = [
  { path: '', component: BodyComponent},
  {path:'carrito', component: CarrocomprasComponent},
  {path:'Home', component: BodyComponent},
  {path: 'termycond', component: TermycondicionesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
