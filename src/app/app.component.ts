import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-playground2';
  heroes = [{name: 'junwoo', skill: 'fireball'}, {name: 'yeoul', skill: 'death-punch'}, {name: 'gaon', skill: 'super-kick'}];
}
