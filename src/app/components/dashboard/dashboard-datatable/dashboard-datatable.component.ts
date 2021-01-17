import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-datatable',
  templateUrl: './dashboard-datatable.component.html',
  styleUrls: ['./dashboard-datatable.component.css']
})
export class DashboardDatatableComponent implements OnInit {

  dbTransactions: Array<any> = [{ name: 'Carlos Gonzales', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }, { name: 'Pumarejo', cel: '310 345 4356', email: 'cgonza@gmail.com', date: '11/03/2020', age: 24 }]

  constructor() { }

  ngOnInit(): void {
  }

}
