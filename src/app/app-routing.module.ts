import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {SuscribeteComponent} from './suscribete/suscribete.component';
import {InstructoresComponent} from './instructores/instructores.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Servicios', component: SuscribeteComponent},
  {path: 'Instructores', component: InstructoresComponent},
  {path: '', component: InicioComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
