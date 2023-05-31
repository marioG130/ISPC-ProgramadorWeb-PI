import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }      from '@angular/common/http';

import { NavbarComponent }          from '../comun/navbar/navbar.component';
import { BodyComponent }            from '../comun/body/body.component';
import { FooterComponent }          from '../comun/footer/footerComponent';

import { QuienesSomosComponent }    from './quienes-somos/quienes-somos.component';
import { ContactoComponent }        from './contacto/contacto.component';
import { TermCondicionesComponent } from './term-condic/term-condic.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    QuienesSomosComponent,
    ContactoComponent,
    TermCondicionesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule {

}
