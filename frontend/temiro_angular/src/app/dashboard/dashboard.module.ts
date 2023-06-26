import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule }        from '@angular/router';

import { CarrocomprasComponent }  from './carrocompras/carrocompras.component';
import { MisComprasComponent }    from './mis-compras/mis-compras.component';
import { IndiceComponent }        from './indice/indice.component';
import { ProductoComponent }      from './productos/producto/producto.component';
import { ComprarComponent }       from './productos/comprar/comprar.component';
import { PerfilComponent }        from './perfil/perfil.component';
import { ProductosComponent }     from './productos/productos.component';
import { DetallesComponent }      from './productos/detalles/detalles.component';
import { FormularioConsultaComponent } from './servicios/FormuConsultas/formulario-consulta.component';



@NgModule({
  declarations: [
    IndiceComponent,
    ProductoComponent,
    ProductosComponent,
    DetallesComponent,
    CarrocomprasComponent,
    MisComprasComponent,
    ComprarComponent,
    PerfilComponent,
    FormularioConsultaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
})
export class DashboardModule {

}
