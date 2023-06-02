import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { CarrocomprasComponent } from './carrocompras/carrocompras.component';
import { MisComprasComponent }   from './mis-compras/mis-compras.component';

@NgModule({
  declarations: [
    CarrocomprasComponent,
    MisComprasComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule {

}
