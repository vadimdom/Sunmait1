import { Archer, ActiveSkill } from './archer';

export class ArcherCaptain extends Archer {
  skill: ActiveSkill;

  constructor(
  ) {
    super();

    this.type = 'Captain';
    this.damage = { min: 30, max: 35 };
    this.health = 600;
    this.mana = 200;
    this.armor = 1;

    this.skill = {
      type: 'Active',
      name: 'Shot',
      damage: 150,
      cost: 50,
      description: 'Deal 150 damage'
    };
  }
}