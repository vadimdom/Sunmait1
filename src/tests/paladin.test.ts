import { Paladin } from '../units';
import { paladinTemplate } from './templates';

describe('Paladin has right parameters', () => {
  it('Paladin has right health', () => {
    const paladin = new Paladin();
  
    expect(paladin.health).toBe(paladinTemplate.health);
  });

  it('Paladin has right damage', () => {
    const paladin = new Paladin();

    expect(paladin.damage).toEqual(paladinTemplate.damage);
  });

  it('Paladin has right mana', () => {
    const paladin = new Paladin();

    expect(paladin.mana).toBe(paladinTemplate.mana);
  });

  it('Paladin has right armor', () => {
    const paladin = new Paladin();

    expect(paladin.armor).toBe(paladinTemplate.armor);
  });

  it('Paladin has right skill', () => {
    const paladin = new Paladin();

    expect(paladin.skill).toEqual(paladinTemplate.skill);
  });
})