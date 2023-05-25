import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { CarrocomprasComponent } from './carrocompras/carrocompras.component';
import { IndicesComponent } from './indices/indices.component';

@NgModule({
  declarations: [
    CarrocomprasComponent,
    IndicesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule {

}
