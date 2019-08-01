import { DefaultUnit, Skill } from '../common';

export interface ActiveDamageSkill extends Skill {
  damage: number;
  cost: number;
};

export interface PassiveSkill extends Skill {
  multiplier: number;
  chance: number;
}

export interface ActiveHealSkill extends Skill {
  health: number;
  cost: number;
};

interface WithActiveDamageSkill extends DefaultUnit {
  skill: ActiveDamageSkill;
};

interface WithActiveHealSkill extends DefaultUnit {
  skill: PassiveSkill;
  skill2: ActiveHealSkill;
};

interface ActiveDamageSkillBehavior {
  useSkill: (user: WithActiveDamageSkill, target: DefaultUnit) => void;
};
interface ActiveHealSkillBehavior {
  useSkill: (user: WithActiveHealSkill, target: DefaultUnit) => void;
};

export class SimpleDamageSkill implements ActiveDamageSkillBehavior {
  useSkill = (attacking: WithActiveDamageSkill, otherUnit: DefaultUnit): void => {
    if (otherUnit.unitName === attacking.unitName && otherUnit.type === attacking.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.isDead) {
        console.log(`You can not use skill on dead units!`);
      } else {
        if (attacking.mana < attacking.skill.cost) {
          console.log('You have no enough mana!');
        } else {
          console.log(`${attacking.unitName} ${attacking.type} used Skill on ${otherUnit.unitName}`);
          attacking.mana = attacking.mana - attacking.skill.cost;
          otherUnit.health = otherUnit.health + otherUnit.armor - attacking.skill.damage;
          console.log(`Damage = ${attacking.skill.damage}`);
          if (otherUnit.health <= 0) {
            otherUnit.isDead = true;
            otherUnit.health = 0;
            console.log(`${otherUnit.unitName} is killed by ${attacking.unitName} ${attacking.type}`)
          }
        }
      }
    }
  }
};

export class SimpleHealSkill implements ActiveHealSkillBehavior {
  useSkill = (healer: WithActiveHealSkill, target: DefaultUnit): void => {
    if (target.isDead) {
      console.log(`You can not heal dead units!`);
    } else {
      if (healer.mana < healer.skill2.cost) {
        console.log('You have no enough mana!');
      } else {
        console.log(`${healer.unitName} ${healer.type} healed ${target.unitName}`);
        healer.mana = healer.mana - healer.skill2.cost;
        target.health = target.health + healer.skill2.health;
        console.log(`Heal = ${healer.skill2.health}`);
      }
    }
  }
};
