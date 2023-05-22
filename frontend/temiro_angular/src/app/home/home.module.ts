import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { NavbarComponent }           from './navbar/navbar.component';
import { BodyComponent }             from './body/body.component';
import { FooterComponent }           from './footer/FooterComponent';

import { QuienesSomosComponent }     from './quienes-somos/quienes-somos.component';
import { ContactoComponent }         from './contacto/contacto.component';
import { TermycondicionesComponent } from './termycondiciones/termycondiciones.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    QuienesSomosComponent,
    ContactoComponent,
    TermycondicionesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule {

}
