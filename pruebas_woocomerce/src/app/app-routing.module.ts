import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DescripcionComponent } from './componentes/lista-productos/descripcion/descripcion.component';

const routes: Routes = [

  {path: 'Productos', component: ListaProductosComponent},
  {path: 'Productos/:id', component: DescripcionComponent},
  {path: 'Carrito', component: CarritoComponent},
  {path: '', component: PortadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
