import { DefaultUnit } from './common';
import { AttackBehavior, AttackWithCriticalChance } from './attackBehavior/attackBehavior';
import { ICanAttack, IWithPassiveSkill, PassiveSkill } from './interfaces';

export class Skeleton
  extends DefaultUnit
  implements
    ICanAttack,
    IWithPassiveSkill
{
  skill: PassiveSkill;
  attackBehavior: AttackBehavior;

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
    this.attackBehavior = new AttackWithCriticalChance();
  }

  attack(otherUnit: DefaultUnit) {
    this.attackBehavior.attackWithCriticalChance && this.attackBehavior.attackWithCriticalChance(this, otherUnit);
  }
}