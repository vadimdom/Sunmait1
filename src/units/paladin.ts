import { DefaultUnit } from './common';
import { AttackBehavior, AttackWithCriticalChance } from './attackBehavior/attackBehavior';
import { ICanAttack, IWithPassiveSkill, IWithActiveHealSkill, ActiveHealSkill, PassiveSkill } from './interfaces';
import { SimpleHealSkill } from './skillBehavior/activeDamageSkillBehavior';

export class Paladin
  extends DefaultUnit
  implements
    ICanAttack,
    IWithPassiveSkill,
    IWithActiveHealSkill
{
  skill: PassiveSkill;
  skill2: ActiveHealSkill;
  attackBehavior: AttackBehavior;

  constructor(
  ) {
    super();

    this.unitName = 'Paladin';
    this.damage = { min: 40, max: 50 };
    this.health = 700;
    this.mana = 300;
    this.armor = 5;

    this.skill = {
      type: 'Passive',
      name: 'Critical strike',
      multiplier: 3,
      chance: 30,
      description: '30% to deal 3x damage'
    };
    this.skill2 = {
      type: 'Active',
      name: 'Heal',
      health: 100,
      cost: 50,
      description: 'Heal by 100 HP'
    };
    this.attackBehavior = new AttackWithCriticalChance();
  }

  attack(otherUnit: DefaultUnit) {
    this.attackBehavior.attackWithCriticalChance && this.attackBehavior.attackWithCriticalChance(this, otherUnit);
  };

  useHealSkill(otherUnit: DefaultUnit) {
    const uesHealSkill = new SimpleHealSkill();
    uesHealSkill.useSkill(this, otherUnit);
  }
}