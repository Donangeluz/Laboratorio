import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  mensaje = 'Bienvenido al Gym';
  escondido = false;
  constructor() { }

  ngOnInit(): void {
  }
  getMensaje(){
    return this.mensaje ;
  }
}
