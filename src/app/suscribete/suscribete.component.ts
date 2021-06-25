import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../core/paraservicio/equipo.service';

@Component({
  selector: 'app-suscribete',
  templateUrl: './suscribete.component.html',
  styleUrls: ['./suscribete.component.css'],
  providers: [EquipoService],
})
export class SuscribeteComponent implements OnInit {

  equipo:any[] = [];

  constructor(private funcionesComunes: EquipoService) {
    this.equipo = funcionesComunes.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
