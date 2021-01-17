import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard-datatable',
  templateUrl: './dashboard-datatable.component.html',
  styleUrls: ['./dashboard-datatable.component.css']
})

export class DashboardDatatableComponent implements OnInit {

  // Variables para el filtro de fehca
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  // Cabecera
  header: string[] = ['Nombre', 'Cel', 'Email', 'Edad', 'Fecha de comprar']
  // Contenido de la tabla local
  localTransactions: Array<any> = [{ name: 'Carlos Gonzales', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }]

  constructor() { }

  ngOnInit(): void {
  }

}
