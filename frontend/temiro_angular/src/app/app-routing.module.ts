import { Component, NgModule }       from '@angular/core';
import { RouterModule, Routes }      from '@angular/router';

import { BodyComponent }             from './comun/body/body.component';
import { NoEncontradaComponent }     from './comun/no-encontrada/no-encontrada.component';

import { ContactoComponent }         from './home/contacto/contacto.component';
import { QuienesSomosComponent }     from './home/quienes-somos/quienes-somos.component';
import { FaqComponent }              from './home/faq/faq.component';
import { LoginComponent }            from './home/login/login.component';
import { RegistroComponent }         from './home/registro/registro.component';
import { TermCondicionesComponent }  from './home/term-condic/term-condic.component';

import { IndiceComponent }           from './dashboard/indice/indice.component';
import { CarrocomprasComponent }     from './dashboard/carrocompras/carrocompras.component';
import { ProductosComponent }        from './dashboard/productos/productos.component';
import { ServiciosComponent }        from './dashboard/servicios/servicios.component';
import { DetallesComponent }         from './dashboard/productos/detalles/detalles.component';

import { IndiceAdmComponent }        from './dashboardadmin/indice-adm/indice-adm.component';
import { FormuProductosComponent }   from './dashboardadmin/formu-productos/formu-productos.component';
import { AbmClientesComponent }      from './dashboardadmin/abm-clientes/abm-clientes.component';


const routes: Routes = [
  {path: '', component: BodyComponent},

  {path: 'home', component: BodyComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'termycond', component: TermCondicionesComponent},

  {path: 'indice', component: IndiceComponent},
  {path: 'carrito', component: CarrocomprasComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'products/:productId', component: DetallesComponent},

  {path: 'indiceadm', component: IndiceAdmComponent},
  {path: 'formuproductos', component: FormuProductosComponent},
  {path: 'abmclientes', component: AbmClientesComponent},

  {path: 'noencontrada-404', component: NoEncontradaComponent},
  {path: '**', redirectTo: '/noencontrada-404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
