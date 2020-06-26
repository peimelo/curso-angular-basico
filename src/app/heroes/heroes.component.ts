import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
