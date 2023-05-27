import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray} from '@angular/forms';


@Component({
  selector: 'app-formu-productos',
  templateUrl: './formu-productos.component.html',
  styleUrls: ['./formu-productos.component.css']
})
export class FormuProductosComponent implements OnInit {

   form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(),
    category: new FormControl(''),
    identifier: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(),
    unidades: new FormControl(),
    Stock: new FormControl(''),
    img: new FormControl('')

   });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group(
      {
          name:['',[]],
          id: ['', []],
          category: ['', []],
          identifier: ['', []],
          description: ['', []],
          price: ['', []],
          unidades: ['', []],
          Stock: ['', []],
          img: ['', []]      
          })
      
    throw new Error('Method not implemented.');
  }

}
