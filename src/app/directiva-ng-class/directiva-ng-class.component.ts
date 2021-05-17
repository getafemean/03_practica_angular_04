import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-class',
  templateUrl: './directiva-ng-class.component.html',
  styleUrls: ['./directiva-ng-class.component.scss']
})
export class DirectivaNgClassComponent implements OnInit {

  jugadores: any = [
    {nombre: 'Magic Johnson', equipo: 'lakers'},
    {nombre: 'Larry Bird', equipo: 'celtics'},
    {nombre: 'Michael Jordan', equipo: 'bulls'},
    {nombre: 'Karem Abdul Jabbar', equipo: 'lakers'},
    {nombre: 'Pedro Jiménez'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
