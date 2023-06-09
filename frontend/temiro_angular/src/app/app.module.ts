import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';

import { NavbarComponent }           from './comun/navbar/navbar.component';
import { BodyComponent }             from './comun/body/body.component';
import { FooterComponent }           from './comun/footer/footer.component';

import { QuienesSomosComponent }     from './home/quienes-somos/quienes-somos.component';
import { FaqComponent }              from './home/faq/faq.component';
import { LoginComponent }            from './home/login/login.component';
import { RegistroComponent }         from './home/registro/registro.component';
import { TermCondicionesComponent }  from './home/term-condic/term-condic.component';

import { IndiceComponent }           from './dashboard/indice/indice.component';
import { ProductosComponent }        from './dashboard/productos/productos.component';
import { ProductoComponent }         from './dashboard/productos/producto/producto.component';
import { ServiciosComponent }        from './dashboard/servicios/servicios.component';
import { DetallesComponent }         from './dashboard/productos/detalles/detalles.component';

import { IndiceAdmComponent }        from './dashboardadmin/indice-adm/indice-adm.component';
import { FormuProductosComponent }   from './dashboardadmin/formu-productos/formu-productos.component';
import { AbmClientesComponent }      from './dashboardadmin/abm-clientes/abm-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    QuienesSomosComponent,
    FaqComponent,
    LoginComponent,
    RegistroComponent,
    TermCondicionesComponent,
    IndiceComponent,
    ProductosComponent,
    ProductoComponent,
    ServiciosComponent,
    DetallesComponent,
    IndiceAdmComponent,
    FormuProductosComponent,
    AbmClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
