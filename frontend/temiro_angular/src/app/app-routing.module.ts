import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './home/body/body.component';

import { ContactoComponent }         from './home/contacto/contacto.component';
import { QuienesSomosComponent }     from './home/quienes-somos/quienes-somos.component';
import { FaqComponent }              from './home/faq/faq.component';
import { LoginComponent }            from './home/login/login.component';
import { RegistroComponent }         from './home/registro/registro.component';
import { TermycondicionesComponent } from './home/termycondiciones/termycondiciones.component';

import { CarrocomprasComponent }     from './dashboard/carrocompras/carrocompras.component';
import { ProductosComponent }        from './dashboard/productos/productos.component';
import { ServiciosComponent }        from './dashboard/servicios/servicios.component';


const routes: Routes = [
  {path: '', component: BodyComponent},

  {path: 'home', component: BodyComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'termycond', component: TermycondicionesComponent},

  {path: 'carrito', component: CarrocomprasComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'servicios', component: ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
