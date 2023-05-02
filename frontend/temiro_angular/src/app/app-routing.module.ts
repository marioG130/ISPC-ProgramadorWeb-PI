import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrocomprasComponent } from './carrito/carrocompras/carrocompras.component';
import { BodyComponent } from './home/body/body.component';
import { TermycondicionesComponent } from './termycondiciones/termycond/termycondiciones.component';


const routes: Routes = [
  {path:'carrito', component: CarrocomprasComponent},
  {path:'Home', component: BodyComponent},
  {path: 'termycond', component: TermycondicionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]

})
export class AppRoutingModule { }
