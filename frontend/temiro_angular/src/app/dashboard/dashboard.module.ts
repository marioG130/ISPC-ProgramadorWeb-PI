import { NgModule, CUSTOM_ELEMENTS_SCHEMA }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { CarrocomprasComponent } from './carrocompras/carrocompras.component';
import { MisComprasComponent }   from './mis-compras/mis-compras.component';
import { IndiceComponent } from './indice/indice.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    IndiceComponent,
    ProductoComponent,
    CarrocomprasComponent,
    MisComprasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {

}
