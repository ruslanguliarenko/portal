import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  texto  = 'Wenceslau Braz - Cuidado com as cargas';
  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;
}
