import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto=products

  Caracteristicas(){}

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
  }


  /*
    constructor(private route: ActivatedRoute,){}


ngOnInit() {
  this.route.paramMap.subscribe(paramsMap => {
    this.products = products[+paramsMap.get('productId')!]
  })
  clickDetalles1(){
    alert('Bloquean el 99% de los rayos UVA y UVB.Cuentan con una pantalla 90% de luz visible y coinciden perfectamente en color y no presentan distorsiones e imperfecciones. Ideal para vos!!!');
  }

  clickDetalles2(){
    alert('Diseñadas para reducir y filtrar la cantidad de rayos de luz azul que llega al ojo y ayudan a evitar que causen daños potenciales. Reducen la fatiga ocular y mejoran el contraste');
  }

  clickDetalles3(){
    alert('Proporcionan una buena visibilidad, son tu mejor elección si nadas por ocio y para mantenerte en forma, especialmente si no tienes costumbre de usar Gafas de Natación.');
  }

  clickDetalles4(){
    alert('Corrigen los problemas de visión y le devuelven una visión nítida.');
  }*/

}