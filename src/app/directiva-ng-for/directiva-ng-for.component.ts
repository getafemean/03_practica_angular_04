import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.scss']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<Proveedor> =[
    new Proveedor('Gas Natural', 'A12345678'),
    new Proveedor('Iberdrola', 'A87654321'),
    new Proveedor('Jazztel', 'B12345678'),
    new Proveedor('BBVA', 'C12345678'),
  ]; 

  clientes = ['Orange', 'Jazztel']

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.proveedores = [...this.proveedores, new Proveedor('Orange','A44556666')];
    }, 3000)
  }

}
