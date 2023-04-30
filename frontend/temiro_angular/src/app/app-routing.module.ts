import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrocomprasComponent } from './carrito/carrocompras/carrocompras.component';
import { BodyComponent } from './home/body/body.component';


const routes: Routes = [
  {path:'carrito', component: CarrocomprasComponent},
  {path:'Home', component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]

})
export class AppRoutingModule { }
