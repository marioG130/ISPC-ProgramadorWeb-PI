import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/FooterComponent';
import { BodyComponent } from './home/body/body.component';
import { SectionComponent } from './home/section/section.component';
import { RegistroComponent } from './home/registro/registro.component';
import { TermycondicionesComponent } from './termycondiciones/termycond/termycondiciones.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    SectionComponent,
    RegistroComponent,
<<<<<<< HEAD
=======
    TermycondicionesComponent,
>>>>>>> 53c22b15925d9c5857bc45e9fff46a88312aff76
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
