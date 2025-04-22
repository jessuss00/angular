import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { PortadaComponent } from './componentes/portada/portada.component';

const routes: Routes = [

  {path: 'Productos', component: ListaProductosComponent},
  {path: '', component: PortadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
