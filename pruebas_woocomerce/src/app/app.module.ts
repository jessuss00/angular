import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DescripcionComponent } from './componentes/lista-productos/descripcion/descripcion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ReparacionesComponent } from './componentes/reparaciones/reparaciones.component';
import { AsesoramientoComponent } from './componentes/asesoramiento/asesoramiento.component';
import { SoporteLineaComponent } from './componentes/soporte-linea/soporte-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    FooterComponent,
    HeaderComponent,
    PortadaComponent,
    CarritoComponent,
    DescripcionComponent,
    ContactoComponent,
    ReparacionesComponent,
    AsesoramientoComponent,
    SoporteLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
