import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Angel',
      edad: 35,
      pais: 'Ecuador',
    },
    {
      nombre: 'Martha',
      edad: 28,
      pais: 'Ecuador',
    },
  ]

  constructor() {
    console.log("Hola funciona");
  }

  obtenerEquipo(){
    return this.equipo
  }


}
