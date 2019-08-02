import { Swordsman } from '../units';
import { swordsmanTemplate } from './templates';

describe('Swordsman has right parameters', () => {
  it('Swordsman has right health', () => {
    const swordsman = new Swordsman();
  
    expect(swordsman.health).toBe(swordsmanTemplate.health);
  });

  it('Swordsman has right damage', () => {
    const swordsman = new Swordsman();

    expect(swordsman.damage).toEqual(swordsmanTemplate.damage);
  });

  it('Swordsman has right mana', () => {
    const swordsman = new Swordsman();

    expect(swordsman.mana).toBe(swordsmanTemplate.mana);
  });

  it('Swordsman has right armor', () => {
    const swordsman = new Swordsman();

    expect(swordsman.armor).toBe(swordsmanTemplate.armor);
  });

  it('Swordsman has no skill', () => {
    const swordsman = new Swordsman();

    expect(swordsman).not.toHaveProperty('skill');
  });
})