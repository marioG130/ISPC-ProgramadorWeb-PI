import { Component, OnInit, Input } from '@angular/core';
import { Venta } from '../venta.model';

@Component({
  selector: 'app-una-venta',
  templateUrl: './una-venta.component.html',
  styleUrls: ['./una-venta.component.css']
})
export class UnaVentaComponent {

    @Input() kv!: Venta;
    @Input() ki!: number;

    constructor() {

    }

    ngOnInit(): void {

    }
}
