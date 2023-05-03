import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrocomprasComponent } from './carrito/carrocompras/carrocompras.component';
import { BodyComponent } from './home/body/body.component';
import { TermycondicionesComponent } from './termycondiciones/termycond/termycondiciones.component';
import { SectionComponent } from './home/section/section.component';
import { RegistroComponent } from './home/registro/registro.component';


const routes: Routes = [
  { path: '', component: BodyComponent},
  {path:'carrito', component: CarrocomprasComponent},
  {path:'Home', component: BodyComponent},
  {path: 'termycond', component: TermycondicionesComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
