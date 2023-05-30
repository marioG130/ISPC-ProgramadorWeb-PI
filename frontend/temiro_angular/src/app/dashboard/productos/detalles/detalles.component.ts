import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { products } from '../products';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

   products!: {
    name: string;
    id: number;
    category: string;
    identifier: string;
    description: string;
    price: number;    
    Stock: string;
    img: string;
    qty: number;
  }; 
  

  constructor(private route: ActivatedRoute,){}


ngOnInit() {
  this.route.paramMap.subscribe(paramsMap => {
    this.products = products[+paramsMap.get('productId')!]
  })
}

}
