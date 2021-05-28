import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  actividades = ['Sala de Pesas', 'Clases de Baile', 'Aeróbicos', 'Área de Cardio', 'Piscina Olímpica', 'Sala de Restauración Corporal'];
  titulo = 'Actividades Disponibles';
  reservado = 'green';
  reserva = false;

  constructor() { }

  ngOnInit(): void {
  }
  reservarAct() {
    this.reserva = !this.reserva;
  }


}
