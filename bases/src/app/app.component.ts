import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Contador';

  numero : number = 0;


  sumaUno(){
    this.numero = this.numero + 1;
  }

  restaUno(){
    this.numero = this.numero - 1;
  }
}
