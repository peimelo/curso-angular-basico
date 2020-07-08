import { HeroFilterPipe } from './hero-filter.pipe';

describe('HeroFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
