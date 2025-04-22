import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PortadaComponent } from './componentes/portada/portada.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    FooterComponent,
    HeaderComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
