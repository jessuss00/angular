import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DescripcionComponent } from './componentes/lista-productos/descripcion/descripcion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ReparacionesComponent } from './componentes/reparaciones/reparaciones.component';
import { AsesoramientoComponent } from './componentes/asesoramiento/asesoramiento.component';
import { SoporteLineaComponent } from './componentes/soporte-linea/soporte-linea.component';

const routes: Routes = [
  
  {path: 'Productos', component: ListaProductosComponent},
  {path: 'Asesoramiento', component: AsesoramientoComponent},
  {path: 'Reparaciones', component: ReparacionesComponent},
  {path: 'Descripcion/:id', component: DescripcionComponent},
  {path: 'Carrito', component: CarritoComponent},
  {path: '', component: PortadaComponent},
  {path: 'Soporte-linea', component: SoporteLineaComponent},
  {path: 'Contacto',component:ContactoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
