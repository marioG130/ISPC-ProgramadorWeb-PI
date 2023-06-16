import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';

import { BodyComponent }             from './comun/body/body.component';
import { FooterComponent }           from './comun/footer/footer.component';
import { NavbarComponent }           from './comun/navbar/navbar.component';
import { NoEncontradaComponent }     from './comun/no-encontrada/no-encontrada.component';

import { ContactoComponent }         from './home/contacto/contacto.component';
import { FaqComponent }              from './home/faq/faq.component';
import { LoginComponent }            from './home/login/login.component';
import { QuienesSomosComponent }     from './home/quienes-somos/quienes-somos.component';
import { RegistroComponent }         from './home/registro/registro.component';
import { TermCondicionesComponent }  from './home/term-condic/term-condic.component';

import { CarrocomprasComponent }     from './dashboard/carrocompras/carrocompras.component';
import { IndiceComponent }           from './dashboard/indice/indice.component';
import { MisComprasComponent }       from './dashboard/mis-compras/mis-compras.component';
import { ProductosComponent }        from './dashboard/productos/productos.component';
import { ProductoComponent }         from './dashboard/productos/producto/producto.component';
import { DetallesComponent }         from './dashboard/productos/detalles/detalles.component';
import { ServiciosComponent }        from './dashboard/servicios/servicios.component';

import { AbmClientesComponent }      from './dashboardadmin/abm-clientes/abm-clientes.component';
import { FormuProductosComponent }   from './dashboardadmin/formu-productos/formu-productos.component';
import { IndiceAdmComponent }        from './dashboardadmin/indice-adm/indice-adm.component';
import { FormularioConsultaComponent } from './dashboard/servicios/FormuConsultas/formulario-consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,

    FaqComponent,
    LoginComponent,
    QuienesSomosComponent,
    RegistroComponent,
    TermCondicionesComponent,

    CarrocomprasComponent,
    IndiceComponent,
    MisComprasComponent,
    ProductosComponent,
    ProductoComponent,
    DetallesComponent,
    ServiciosComponent,

    AbmClientesComponent,
    FormuProductosComponent,
    IndiceAdmComponent,
    FormularioConsultaComponent
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
