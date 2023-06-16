import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { loadStripe, Stripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

    private pasarela!: Stripe | null;
    private montoPesos: number;

    constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location) {
        this.montoPesos = 0;
    }

    async ngOnInit() {
        this.route.paramMap.subscribe(paramsMap => {
            this.montoPesos = Number(paramsMap.get('precio')!);
        });
        this.pasarela = await loadStripe('pk_test_51NI1nJLLDDPBAXfg2IjfG4GwE3RlghCEYYy3VYfEljBAsJxGXmTlxKsBrr8gjOALG7aZ9shYKULEKg9QI7d4GHLk005zO47L0c');
        // console.log(this.pasarela);
        if (this.pasarela==null) return;
        const elementos = this.pasarela.elements();
        const tarjeta = elementos.create('card');
        tarjeta.mount('#card');

        tarjeta.on('change', (event) => {
            const displayError = document.getElementById("erroresTarjeta");
            if (displayError==null) return;
            if (event.error) {
                 displayError.textContent = event.error.message;
            } else {
                 displayError.textContent = '';
            }
        });

        const botonP = document.getElementById("botonPago");
        if (botonP==null) return;
        botonP.addEventListener('click', async (event) => {
            event.preventDefault();
            const ownerInfo = {
                owner: { name: 'Cliente Generico' },
                amount: this.montoPesos * 100,  // se debe enviar en centavos
                currency: 'ars',                // en pesos argentinos
            };
            if (this.pasarela==null) return;
            try {
                const resu = await this.pasarela.createSource(tarjeta,ownerInfo);
                // console.log(resu);
                let estado = resu.source!.status;         // valor devuelto por Stripe
                let debito = resu.source!.amount! / 100;  // valor devuelto por Stripe
                if (estado=='chargeable') {
                    alert('Pago Exitoso! \n'+
                          'Se debitaron $ '+String(debito)+'\n'+
                          'Muchas gracias');
                    this.location.back();
                } else {
                    alert('Hubieron problemas al procesar el pago!');
                }
            } catch (e) {
                console.warn(e);
            }
        });
    }

}
