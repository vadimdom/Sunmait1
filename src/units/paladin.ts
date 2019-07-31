import { Skeleton, PassiveSkill } from './skeleton';

export class Paladin extends Skeleton {
  skill: PassiveSkill;

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
  }
}