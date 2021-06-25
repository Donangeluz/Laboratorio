import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../core/paraservicio/equipo.service';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css'],
  providers: [EquipoService],
})
export class ListaServiciosComponent implements OnInit {

  equipo:any[] = [];

  constructor(private funcionesComunes: EquipoService) {
    this.equipo = funcionesComunes.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
