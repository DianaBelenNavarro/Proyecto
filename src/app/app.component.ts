import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Don Quijote';
  apeidos: string = 'Lopez';
  n1: number = 10;
  n2: number = 5;
}

