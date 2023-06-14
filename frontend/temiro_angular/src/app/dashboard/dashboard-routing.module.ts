import { NgModule }       from '@angular/core';
import { RouterModule, Routes }      from '@angular/router';

import { IndiceComponent } from './indice/indice.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { DashboardComponent } from './dashboard.component';
import { ProductosComponent } from './productos/productos.component';
import { CarrocomprasComponent } from './carrocompras/carrocompras.component';





const routes: Routes = [
  { path: 'dashboard' , component: DashboardComponent,
    children : [
      { path: 'indice', component: IndiceComponent},
      { path: 'servicios', component: ServiciosComponent},
      { path: 'producto', component: ProductoComponent},
      { path: 'productos', component: ProductosComponent},
      { path: 'carrocompras', component: CarrocomprasComponent}
    ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
