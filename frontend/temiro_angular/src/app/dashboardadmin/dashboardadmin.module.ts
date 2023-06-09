import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AbmClientesComponent } from './abm-clientes/abm-clientes.component';



@NgModule({
  declarations: [
    
   
    AbmClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardAdminModule {

}
