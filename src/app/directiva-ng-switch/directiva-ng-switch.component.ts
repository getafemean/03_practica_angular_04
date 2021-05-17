import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-switch',
  templateUrl: './directiva-ng-switch.component.html',
  styleUrls: ['./directiva-ng-switch.component.scss']
})
export class DirectivaNgSwitchComponent implements OnInit {

  mensaje: string = 'success';

  constructor() { }

  ngOnInit(): void {
  }

}
