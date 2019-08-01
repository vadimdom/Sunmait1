import { DefaultUnit, Skill } from '../common';

export interface PassiveSkill extends Skill {
  multiplier: number;
  chance: number;
}

interface WithCriticalStrike extends DefaultUnit {
  skill: PassiveSkill;
}

interface AttackBehavior {
  attack: (user: WithCriticalStrike, target: DefaultUnit) => void;
};

export class SimpleAttack implements AttackBehavior {
  attack = (attacking: DefaultUnit, otherUnit: DefaultUnit): void => {
    if (otherUnit.unitName === attacking.unitName && otherUnit.type === attacking.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.isDead) {
        console.log(`You can not attack dead units`);
      } else {
        console.log(`${attacking.unitName} ${attacking.type} attacked ${otherUnit.unitName}`);
        // console.log(`before = ${otherUnit.health}`);
        const attackDamage = Math.floor(Math.random() * (+attacking.damage.max - +attacking.damage.min)) + +attacking.damage.min;
        console.log(`Damage = ${attackDamage}`);
        otherUnit.health = otherUnit.health + otherUnit.armor - attackDamage;
        if (otherUnit.health <= 0) {
          otherUnit.isDead = true;
          otherUnit.health = 0;
          console.log(`${otherUnit.unitName} is killed by ${attacking.unitName} ${attacking.type}`)
        }
        // console.log(`after = ${otherUnit.health}`);
      }
    }
  };
}

export class AttackWithCriticalChance implements AttackBehavior {
  attack = (attacking: WithCriticalStrike, otherUnit: DefaultUnit): void => {
    if (otherUnit.unitName === attacking.unitName && otherUnit.type === attacking.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.isDead) {
        console.log(`You can not attack dead units!`);
      } else {
        console.log(`${attacking.unitName} ${attacking.type} attacked ${otherUnit.unitName}`);
        // console.log(`before = ${otherUnit.health}`);
        let resultDamage;
        const attackDamage = Math.floor(Math.random() * (+attacking.damage.max - +attacking.damage.min)) + +attacking.damage.min;
        const skillChance = Math.floor(Math.random() * 100);
        if (skillChance > attacking.skill.chance) {
          resultDamage = attackDamage;
        } else {
          console.log(`Critical hit`);
          resultDamage = attacking.skill.multiplier * attackDamage;
        }
        console.log(`Damage = ${resultDamage}`);
        otherUnit.health = otherUnit.health + otherUnit.armor - resultDamage;
        if (otherUnit.health <= 0) {
          otherUnit.isDead = true;
          otherUnit.health = 0;
          console.log(`${otherUnit.unitName} is killed by ${attacking.unitName} ${attacking.type}`)
        }
        // console.log(`after = ${otherUnit.health}`);
      }
    }
  }
}
