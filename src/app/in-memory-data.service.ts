import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'Windstorm' },
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    // retorna apenas o id dos heroes: [11, 12, 13, 14, 15, 16]
    const heroIds = heroes.map((hero) => hero.id);

    // retorna o maior valor dos heroIds: Math.max(11, 12, 13, 14, 15, 16)
    const maxId = Math.max(...heroIds);

    // incrementa o maxId ou retorna 1 caso nao tenha heroes no array
    const nextId = heroes && heroes.length > 0 ? maxId + 1 : 1;

    return nextId;
  }
}
