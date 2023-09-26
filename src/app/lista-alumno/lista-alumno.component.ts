import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss']
})
export class ListaAlumnoComponent {

  title = 'Lista de Alumnos';

  listaAlumnos: Alumno[] = [
    {
      id: 1,
      nombre: "Carlitos",
      materia: "Matematica",
      aprobado: false
    },
    {
      id: 2,
      nombre: "Fernando",
      materia: "Java",
      aprobado: true
    },
    {
      id: 3,
      nombre: "Daiana",
      materia: "Contabilidad 1",
      aprobado: true
    },
    {
      id: 4,
      nombre: "Angelucci",
      materia: "Mecanica Racional",
      aprobado: false
    },
    {
      id: 5,
      nombre: "David",
      materia: "NET",
      aprobado: true
    },
    {
      id: 6,
      nombre: "Lucas",
      materia: "Angular",
      aprobado: true
    }
  ]

  enabled = true;


  alternarEnabled() {
    this.enabled = !this.enabled;
  }

  getColor(isTrue:boolean) : object {
    return {
      color: isTrue ? 'blue' : 'red'
    }
  }


}
