import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule }        from '@angular/router';

import { FormuProductosComponent } from './formu-productos/formu-productos.component';
import { IndiceAdmComponent }      from './indice-adm/indice-adm.component';
import { AbmClientesComponent }    from './abm-clientes/abm-clientes.component';
import { ServClientesService }     from './abm-clientes/serv-clientes.service';

@NgModule({
  declarations: [
    FormuProductosComponent,
    IndiceAdmComponent,
    AbmClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ServClientesService
  ],
})
export class DashboardAdminModule {

}
