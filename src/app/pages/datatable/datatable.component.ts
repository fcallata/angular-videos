import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Persona {    
  nombre : string,
  apellido: string,
  dni: string
}

const datos: Persona[] = [
  {nombre: 'Jose' , apellido: 'Perez', dni: '3332233'},
  {nombre: 'Nahuel' , apellido: 'Perez', dni: '3453453'},
  {nombre: 'Juan' , apellido: 'Perez', dni: '6456456'},
  {nombre: 'Esteba' , apellido: 'Perez', dni: '4564564'},
  {nombre: 'Maria' , apellido: 'Perez', dni: '456456'},
  {nombre: 'Josefina' , apellido: 'Perez', dni: '3332233'},
  {nombre: 'Veronica' , apellido: 'Perez', dni: '3332233'},
  {nombre: 'Alicia' , apellido: 'Perez', dni: '3332233'},
  {nombre: 'Melina' , apellido: 'Perez', dni: '3332233'},
  {nombre: 'Solange' , apellido: 'Perez', dni: '3332233'},
  {nombre: 'Lucas' , apellido: 'Perez', dni: '3332233'}
]


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit { 

  displayedColumns: string[] = ['nombre', 'apellido' , 'dni'];
  datasource = new MatTableDataSource<Persona>(datos);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.datasource.paginator = this.paginator;
  }

}
