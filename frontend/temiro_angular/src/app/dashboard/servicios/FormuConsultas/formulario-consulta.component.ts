import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-consulta',
  templateUrl: './formulario-consulta.component.html',
  styleUrls: ['./formulario-consulta.component.css']
})
export class FormularioConsultaComponent {
  formularioConsulta: FormGroup;

  constructor() {
    this.formularioConsulta = new FormGroup({
      apellido: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      consulta: new FormControl('', Validators.required)
    });
  }

  enviarConsulta() {
    if (this.formularioConsulta.valid) {
      alert('Mensaje enviado');
      this.formularioConsulta.reset();
      alert('Formulario válido');
      console.log(this.formularioConsulta.value);
    } else {
      alert('Formulario inválido');
      this.formularioConsulta.reset();
    }
  }
}