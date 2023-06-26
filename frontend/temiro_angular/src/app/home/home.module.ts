import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }      from '@angular/common/http';
import { RouterModule }          from '@angular/router';



import { QuienesSomosComponent }    from './quienes-somos/quienes-somos.component';
import { ContactoComponent }        from './contacto/contacto.component';
import { TermCondicionesComponent } from './term-condic/term-condic.component';
import { FaqComponent }             from './faq/faq.component';
import { LoginComponent }           from './login/login.component';
import { RegistroComponent }        from './registro/registro.component';



@NgModule({
  declarations: [
    QuienesSomosComponent,
    ContactoComponent,
    TermCondicionesComponent,
    FaqComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class HomeModule {

}
