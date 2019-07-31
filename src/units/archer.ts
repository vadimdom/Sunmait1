import { DefaultUnit, Skill } from './common';

export interface ActiveSkill extends Skill {
  damage: number;
  cost: number;
}

export class Archer extends DefaultUnit {
  skill: ActiveSkill;

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

  useSkill(otherUnit: DefaultUnit): void {
    if (otherUnit.unitName === this.unitName && otherUnit.type === this.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.isDead) {
        console.log(`You can not use skill on dead units!`);
      } else {
        if (this.mana < this.skill.cost) {
          console.log('You have no enough mana!');
        } else {
          console.log(`${this.unitName} ${this.type} used Skill on ${otherUnit.unitName}`);
          this.mana = this.mana - this.skill.cost;
          otherUnit.health = otherUnit.health + otherUnit.armor - this.skill.damage;
          console.log(`Damage = ${this.skill.damage}`);
          if (otherUnit.health <= 0) {
            otherUnit.isDead = true;
            otherUnit.health = 0;
            console.log(`${otherUnit.unitName} is killed by ${this.unitName} ${this.type}`)
          }
        }
      }
    }
  }
}