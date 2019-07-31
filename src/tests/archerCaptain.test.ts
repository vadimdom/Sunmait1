import { archerCaptainTemplate } from './templates';
import { ArcherCaptain } from '../units';

describe('ArcherCaptain has right parameters', () => {
  it('ArcherCaptain has right health', () => {
    const archerCaptain = new ArcherCaptain();
  
    expect(archerCaptain.health).toBe(archerCaptainTemplate.health);
  });

  it('ArcherCaptain has right damage', () => {
    const archerCaptain = new ArcherCaptain();

    expect(archerCaptain.damage).toEqual(archerCaptainTemplate.damage);
  });

  it('ArcherCaptain has right mana', () => {
    const archerCaptain = new ArcherCaptain();

    expect(archerCaptain.mana).toBe(archerCaptainTemplate.mana);
  });

  it('ArcherCaptain has right armor', () => {
    const archerCaptain = new ArcherCaptain();

    expect(archerCaptain.armor).toBe(archerCaptainTemplate.armor);
  });

  it('ArcherCaptain has right skill', () => {
    const archerCaptain = new ArcherCaptain();

    expect(archerCaptain.skill).toEqual(archerCaptainTemplate.skill);
  });
})