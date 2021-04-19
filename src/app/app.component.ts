import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-videos';
  mensaje: string;
  fecha: Date;

  constructor(){
    this.mensaje = 'esto es un mensaje de prueba para usar pipes';
    this.fecha = new Date();
  }

}
