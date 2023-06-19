import { Component, NgModule }       from '@angular/core';
import { RouterModule, Routes }      from '@angular/router';

import { BodyComponent }             from './comun/body/body.component';
import { FooterComponent }           from './comun/footer/footer.component';
import { NavbarComponent }           from './comun/navbar/navbar.component';
import { NoEncontradaComponent }     from './comun/no-encontrada/no-encontrada.component';

import { ContactoComponent }         from './home/contacto/contacto.component';
import { FaqComponent }              from './home/faq/faq.component';
import { LoginComponent }            from './home/login/login.component';
import { QuienesSomosComponent }     from './home/quienes-somos/quienes-somos.component';
import { RegistroComponent }         from './home/registro/registro.component';
import { TermCondicionesComponent }  from './home/term-condic/term-condic.component';

import { CarrocomprasComponent }     from './dashboard/carrocompras/carrocompras.component';
import { IndiceComponent }           from './dashboard/indice/indice.component';
import { MisComprasComponent }       from './dashboard/mis-compras/mis-compras.component';
import { PerfilComponent }           from './dashboard/perfil/perfil.component';
import { ProductosComponent }        from './dashboard/productos/productos.component';
import { ProductoComponent }         from './dashboard/productos/producto/producto.component';
import { DetallesComponent }         from './dashboard/productos/detalles/detalles.component';
import { ComprarComponent }          from './dashboard/productos/comprar/comprar.component';
import { ServiciosComponent }        from './dashboard/servicios/servicios.component';
import { FormularioConsultaComponent } from './dashboard/servicios/FormuConsultas/formulario-consulta.component';

import { AbmClientesComponent }      from './dashboardadmin/abm-clientes/abm-clientes.component';
import { FormuProductosComponent }   from './dashboardadmin/formu-productos/formu-productos.component';
import { IndiceAdmComponent }        from './dashboardadmin/indice-adm/indice-adm.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'home', component: BodyComponent},

  {path: 'contacto', component: ContactoComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'termycond', component: TermCondicionesComponent},

  {path: 'carrito', component: CarrocomprasComponent},
  {path: 'indice', component: IndiceComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'detalle/:idproducto', component: DetallesComponent},
  {path: 'comprar/:precio', component: ComprarComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'formulario-consulta', component: FormularioConsultaComponent },

  {path: 'abmclientes', component: AbmClientesComponent},
  {path: 'formuproductos', component: FormuProductosComponent},
  {path: 'indiceadm', component: IndiceAdmComponent},

  {path: 'noencontrada-404', component: NoEncontradaComponent},
  {path: '**', redirectTo: '/noencontrada-404'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
