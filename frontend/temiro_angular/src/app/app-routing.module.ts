import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrocomprasComponent } from './carrito/carrocompras/carrocompras.component';
import { BodyComponent } from './home/body/body.component';
import { TermycondicionesComponent } from './termycondiciones/termycond/termycondiciones.component';
import { SectionComponent } from './home/section/section.component';
import { RegistroComponent } from './home/registro/registro.component';
import {FaqComponent } from './home/faq/faq.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
