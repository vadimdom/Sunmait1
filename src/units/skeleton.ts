import { DefaultUnit, Skill } from './common';

export interface PassiveSkill extends Skill {
  multiplier: number;
  chance: number;
}

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

  attack(otherUnit: DefaultUnit): void {
    if (otherUnit.unitName === this.unitName && otherUnit.type === this.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.isDead) {
        console.log(`You can not attack dead units!`);
      } else {
        console.log(`${this.unitName} ${this.type} attacked ${otherUnit.unitName}`);
        // console.log(`before = ${otherUnit.health}`);
        let resultDamage;
        const attackDamage = Math.floor(Math.random() * (+this.damage.max - +this.damage.min)) + +this.damage.min;
        const skillChance = Math.floor(Math.random() * 100);
        if (skillChance > this.skill.chance) {
          resultDamage = attackDamage;
        } else {
          console.log(`Critical hit`);
          resultDamage = this.skill.multiplier * attackDamage;
        }
        console.log(`Damage = ${resultDamage}`);
        otherUnit.health = otherUnit.health + otherUnit.armor - resultDamage;
        if (otherUnit.health <= 0) {
          otherUnit.isDead = true;
          otherUnit.health = 0;
          console.log(`${otherUnit.unitName} is killed by ${this.unitName} ${this.type}`)
        }
        // console.log(`after = ${otherUnit.health}`);
      }
    }
  }
}