import { DefaultUnit } from './common';
import { AttackWithCriticalChance, PassiveSkill } from './attackBehavior/attackBehavior';

export class Skeleton extends DefaultUnit {
  skill: PassiveSkill;

  constructor(
  ) {
    super();

    this.unitName = 'Skeleton';
    this.damage = { min: 5, max: 8 };
    this.health = 180;
    this.mana = 0;
    this.armor = 1;

    this.skill = {
      type: 'Passive',
      name: 'Critical strike',
      multiplier: 2,
      chance: 20,
      description: '20% to deal 2x damage'
    };
  }

  attack(otherUnit: DefaultUnit) {
    const performAttack = new AttackWithCriticalChance();
    performAttack.attack(this, otherUnit);
  }
}