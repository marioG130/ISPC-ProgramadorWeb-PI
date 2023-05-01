import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/FooterComponent';
import { SectionComponent } from './section/section.component';




@NgModule({
  declarations: [
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    ]


})
export class HomeModule { }
