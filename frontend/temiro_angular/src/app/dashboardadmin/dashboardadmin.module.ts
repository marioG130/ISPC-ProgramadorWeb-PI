import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule }        from '@angular/router';

import { FormuProductosComponent } from './formu-productos/formu-productos.component';
import { IndiceAdmComponent }      from './indice-adm/indice-adm.component';
import { AbmClientesComponent }    from './abm-clientes/abm-clientes.component';
import { ServClientesService }     from './abm-clientes/serv-clientes.service';
import { ListaVentasComponent }    from './lista-ventas/lista-ventas.component';
import { ServVentasService }       from './lista-ventas/serv-ventas.service';
import { UnaVentaComponent }       from './lista-ventas/una-venta/una-venta.component';

@NgModule({
  declarations: [
    FormuProductosComponent,
    IndiceAdmComponent,
    AbmClientesComponent,
    ListaVentasComponent,
    UnaVentaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ServClientesService,
    ServVentasService
  ],
})
export class DashboardAdminModule {

}
