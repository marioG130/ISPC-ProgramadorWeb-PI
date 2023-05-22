import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(///numerotaller:ServiceService//
  ) 
  { 

    ///this.numerotaller=this.numerotaller.incrementartaller();////
  
  }

  ngOnInit():void {
  }
  ////Interpolacion//////
  titulo= "Servicios";
  examenvisual= "./assets/img/examenvisual.jpg"

  /////////Property Binding/////
  tallerdemontaje="./assets/img/taller.jpg"
  textotaller= "taller de montaje";
  desabilitado= true;

////(Event) Binding/////contador de visitas de cada seccion//////
 numerovisual=0;
incrementarvisual(numero1: number) {
  this.numerovisual=this.numerovisual + numero1;
   }
 numeroseguro=0;
incrementarseguro() {
    this.numeroseguro=this.numeroseguro + 1;
 }
 numerotaller=0;
 incrementartaller() {
   this.numerotaller=this.numerotaller + 1;

 }

}
