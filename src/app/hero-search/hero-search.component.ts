import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  template: `
    <app-search-input (search)="onSearch($event)"></app-search-input>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let hero of heroes$ | async">
        <a routerLink="/heroes/{{ hero.id }}">
          {{ hero.name }}
        </a>
      </li>
    </ul>
  `,
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }
}
