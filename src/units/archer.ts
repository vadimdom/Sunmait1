import { DefaultUnit } from './common';
import { SimpleAttack } from './attackBehavior/attackBehavior';
import { ActiveDamageSkill, SimpleDamageSkill } from './skillBehavior/activeDamageSkillBehavior';

export class Archer extends DefaultUnit {
  skill: ActiveDamageSkill;

  constructor(
  ) {
    super();

    this.unitName = 'Archer';
    this.damage = { min: 15, max: 20 };
    this.health = 300;
    this.mana = 100;
    this.armor = 0;

    this.skill = {
      type: 'Active',
      name: 'Shot',
      damage: 100,
      cost: 50,
      description: 'Deal 100 damage'
    };
  }

  attack(otherUnit: DefaultUnit) {
    const performSimpleAttack = new SimpleAttack();
    performSimpleAttack.attack(this, otherUnit);
  }

  useSkill(otherUnit: DefaultUnit): void {
    const useDamageSkill = new SimpleDamageSkill();
    useDamageSkill.useSkill(this, otherUnit);
  }
};
