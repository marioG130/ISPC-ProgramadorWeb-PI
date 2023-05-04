import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/FooterComponent';
import { BodyComponent } from './home/body/body.component';
import { SectionComponent } from './home/section/section.component';
import { RegistroComponent } from './home/registro/registro.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    SectionComponent,
    RegistroComponent,
    QuienesSomosComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
