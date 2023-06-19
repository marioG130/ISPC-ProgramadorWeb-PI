import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  ////Interpolacion//////
  titulo= "Servicios";
  examenvisual= "./assets/img/examenvisual.jpg"

  /////////Property Binding/////
  tallerdemontaje="./assets/img/taller.jpg"
  textotaller= "taller de montaje";
  desabilitado= true;

  formularioConsulta: FormGroup;

  constructor(private router: Router) {
    this.formularioConsulta = new FormGroup({
      apellido: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      consulta: new FormControl('', Validators.required)
    });
  }

  redirigirAFormularioConsulta() {
    this.router.navigate(['/formulario-consulta']);
  }

  ngOnInit():void {
  }

}
