import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { CarrocomprasComponent }  from './carrocompras/carrocompras.component';
import { MisComprasComponent }    from './mis-compras/mis-compras.component';
import { IndiceComponent }        from './indice/indice.component';
import { ProductoComponent }      from './productos/producto/producto.component';
import { ComprarComponent } from './productos/comprar/comprar.component';


@NgModule({
  declarations: [
    IndiceComponent,
    ProductoComponent,
    CarrocomprasComponent,
    MisComprasComponent,
    ComprarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class DashboardModule {

}
