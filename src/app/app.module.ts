import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { FormularioComponent } from './formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaComponent } from './lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { InstructoresComponent } from './instructores/instructores.component';
import { SuscribeteComponent } from './suscribete/suscribete.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormularioComponent,
    CarruselComponent,
    NavbarComponent,
    ListaComponent,
    FooterComponent,
    InicioComponent,
    InstructoresComponent,
    SuscribeteComponent,
    ListaServiciosComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
