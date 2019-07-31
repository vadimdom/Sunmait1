import { Archer } from '../units';
import { archerTemplate } from './templates';

describe('Archer has right parameters', () => {
  it('Archer has right health', () => {
    const archer = new Archer();
  
    expect(archer.health).toBe(archerTemplate.health);
  });

  it('Archer has right damage', () => {
    const archer = new Archer();

    expect(archer.damage).toEqual(archerTemplate.damage);
  });

  it('Archer has right mana', () => {
    const archer = new Archer();

    expect(archer.mana).toBe(archerTemplate.mana);
  });

  it('Archer has right armor', () => {
    const archer = new Archer();

    expect(archer.armor).toBe(archerTemplate.armor);
  });

  it('Archer has right skill', () => {
    const archer = new Archer();

    expect(archer.skill).toEqual(archerTemplate.skill);
  });
})