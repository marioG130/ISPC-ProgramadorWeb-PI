import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';

import { NavbarComponent }           from './home/navbar/navbar.component';
import { FooterComponent }           from './home/footer/FooterComponent';
import { BodyComponent }             from './home/body/body.component';

import { QuienesSomosComponent }     from './home/quienes-somos/quienes-somos.component';
import { LoginComponent }            from './home/login/login.component';
import { RegistroComponent }         from './home/registro/registro.component';
import { TermycondicionesComponent } from './home/termycondiciones/termycondiciones.component';

import { CarrocomprasComponent }     from './dashboard/carrocompras/carrocompras.component';
import { FaqComponent } from './home/faq/faq.component';
import { ProductosComponent }     from './dashboard/productos/productos.component';
import { ProductoComponent } from './dashboard/productos/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    RegistroComponent,
    QuienesSomosComponent,
    LoginComponent,
    CarrocomprasComponent,
    TermycondicionesComponent,
    FaqComponent,
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
