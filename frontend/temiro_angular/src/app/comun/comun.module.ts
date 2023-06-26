import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';

import { BodyComponent }         from './body/body.component';
import { FooterComponent }       from './footer/footer.component';
import { NavbarComponent }       from './navbar/navbar.component';
import { NoEncontradaComponent } from './no-encontrada/no-encontrada.component';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    NoEncontradaComponent
  ],
  exports: [
    FooterComponent,
    BodyComponent,
    NavbarComponent,
    RouterModule
  ],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class ComunModule {

}
