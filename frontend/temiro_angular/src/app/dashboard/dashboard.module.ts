import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { CarrocomprasComponent } from './carrocompras/carrocompras.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    CarrocomprasComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule {

}
