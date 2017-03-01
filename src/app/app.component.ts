import { Component } from '@angular/core';
import { Hero } from './Hero'

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            <h2> My favorite hero is : {{myHero.name}} </h2>
            <p>Heroes :</p>
            <ul>
              <li *ngFor="let hero of heroes">
                  {{hero.name}}
              </li>
            </ul>
            `
})
export class AppComponent  { 
  title = 'Tour of Heroes';

  heroes : Hero[] = [
    { id:1, name:'Windstorm' },
    { id:2, name:'Bombasto' },
    { id:3, name:'Magneta' },
    { id:4, name:'Tornado' }, 
  ]

  myHero: Hero = this.heroes[0];
}
