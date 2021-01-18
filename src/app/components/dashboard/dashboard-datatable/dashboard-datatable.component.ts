import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-datatable',
  templateUrl: './dashboard-datatable.component.html',
  styleUrls: ['./dashboard-datatable.component.css']
})

export class DashboardDatatableComponent implements OnInit {

  // Cabecera
  header: string[] = ['Nombre', 'Celular', 'Email', 'Fecha de comprar', 'Edad']
  // Contenido de la tabla local
  localTransactions: Array<any> = [{ name: 'Carlos Gonzales', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Camila Cardenas', cel: '322 345 7232', email: 'pruebalargamylarga@gmail.com', date: '09/05/2020', age: 18 }, { name: 'Juan Herrera', cel: '310 322 1098', email: 'pruebalargonotanto@gmail.com', date: '28/08/2020', age: 21 }, { name: 'Carlos Gonzales', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Andres Fernandez', cel: '310 345 4356', email: 'pruebacontacto@gmail.com', date: '22/03/2020', age: 24 }, { name: 'Carlos Gonzales', cel: '310 345 4356', email: 'conceptosde@gmail.com', date: '25/03/2020', age: 24 }, { name: 'Luis Alberto Ferrer', cel: '310 345 4356', email: 'purebamedia@gmail.com', date: '15/05/2019', age: 24 }, { name: 'Claudia Mejia', cel: '310 345 4356', email: 'pruebagamularga@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Jorge Luis Matador', cel: '310 345 4356', email: 'contacto@gmail.com', date: '12/06/2020', age: 24 }, { name: 'Rocio Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '18/03/2018', age: 24 },]

  constructor() { }

  ngOnInit(): void {
  }

}
