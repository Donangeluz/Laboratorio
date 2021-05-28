import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  interpolationBinding = 'Nuestros instructores';
  propertyBinding = '#d7a00f';
  oculto = true;

  lista = [
    {
      dia: 'Lunes',
      hora: '10h00'
    },
    {
      dia: 'Miércoles',
      hora: '8h00'
    },
    {
      dia: 'Viernes',
      hora: '14hoo'
    },
  ];

  enviar($event){
    console.log($event);
    this.oculto = !this.oculto;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
