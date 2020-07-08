import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(heroes: Hero[], filter: string): Hero[] {
    const nameFilter = filter.trim().toLowerCase();

    if (!nameFilter) {
      return heroes;
    }

    return heroes.filter(
      (hero) => hero.name.toLowerCase().indexOf(nameFilter) !== -1
    );
  }
}
