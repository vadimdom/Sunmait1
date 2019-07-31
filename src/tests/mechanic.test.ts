import { Paladin } from './../units/paladin';
import { Archer, ArcherCaptain, Swordsman, Skeleton } from '../units';
import { archerTemplate, archerCaptainTemplate, swordsmanTemplate, paladinTemplate } from './templates';

describe('Mechanics', () => {
  describe('Archer use skill on Swordsman', () => {
    it(`Archer's mana is decreased`, () => {
      const archer = new Archer();
      const swordsman = new Swordsman();
      archer.useSkill(swordsman);
    
      expect(archer.mana).toBe(archerTemplate.mana - archerTemplate.skill.cost);
    });

    it(`Swordsman's health is decreased`, () => {
      const archer = new Archer();
      const swordsman = new Swordsman();
      archer.useSkill(swordsman);

      expect(swordsman.health).toBe(swordsmanTemplate.healthAfterOneArcherSkill);
    });
  })

  it(`Skill cannot be applied if not enough mana`, () => {
    const archer = new Archer();
    const swordsman = new Swordsman();
    archer.useSkill(swordsman);

    expect(swordsman.health).toBe(swordsmanTemplate.healthAfterOneArcherSkill);

    archer.useSkill(swordsman);

    expect(swordsman.health).toBe(swordsmanTemplate.healthAfterTwoArcherSkills);

    archer.useSkill(swordsman);
    expect(swordsman.health).toBe(swordsmanTemplate.healthAfterTwoArcherSkills);
  });

  it(`Unit received damage that decrease its HP to 0 is dead`, () => {
    const archer = new Archer();
    const skeleton = new Skeleton();

    archer.useSkill(skeleton);
    archer.useSkill(skeleton);

    expect(skeleton.health).toBe(0);
    expect(skeleton.isDead).toBeTruthy();
  });

  it(`Armor is working`, () => {
    const archer = new Archer();
    const archerCaptain = new ArcherCaptain();
    const swordsman = new Swordsman();

    archerCaptain.useSkill(archer);
    archerCaptain.useSkill(swordsman);

    expect(archer.health).toBe(archerTemplate.health - archerCaptainTemplate.skill.damage);
    expect(swordsman.health).toBe(swordsmanTemplate.health - archerCaptainTemplate.skill.damage + swordsmanTemplate.armor);
  });

  it(`Crit is working`, () => {
    const skeleton = new Skeleton();
    const paladin = new Paladin();
    let critAmount = 0;
    let healthBefore = paladinTemplate.health;

    for (var i = 0; i < 100; i++) {
      skeleton.attack(paladin);
      const healthAfter = paladin.health;
      if (healthBefore - healthAfter >= 5) {
        critAmount = critAmount + 1;
      }
      healthBefore = paladin.health;
    }

    expect(critAmount).toBeGreaterThanOrEqual(10);
    expect(critAmount).toBeLessThanOrEqual(30);
  });
})