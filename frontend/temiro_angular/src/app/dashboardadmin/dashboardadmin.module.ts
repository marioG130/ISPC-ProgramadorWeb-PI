import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { IndicesComponent }     from './indices/indices.component';
import { FormuProductosComponent } from './formu-productos/formu-productos.component';



@NgModule({
  declarations: [
    IndicesComponent,
    FormuProductosComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardAdminModule {

}