import { DefaultUnit } from './common';
import { AttackWithCriticalChance } from './attackBehavior/attackBehavior';
import { ICanAttack, IWithPassiveSkill, PassiveSkill } from './interfaces';

export class Skeleton
  extends DefaultUnit
  implements
    ICanAttack,
    IWithPassiveSkill
{
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