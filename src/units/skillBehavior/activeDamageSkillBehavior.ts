import { DefaultUnit } from '../common';
import { ActiveDamageSkill, ActiveHealSkill } from '../interfaces';

interface UnitWithActiveDamageSkill extends DefaultUnit {
  skill: ActiveDamageSkill;
};

interface UnitWithActiveHealSkill extends DefaultUnit {
  skill2: ActiveHealSkill;
};

interface ActiveDamageSkillBehavior {
  useSkill: (user: UnitWithActiveDamageSkill, target: DefaultUnit) => void;
};
interface ActiveHealSkillBehavior {
  useSkill: (user: UnitWithActiveHealSkill, target: DefaultUnit) => void;
};

export class SimpleDamageSkill implements ActiveDamageSkillBehavior {
  useSkill = (attacking: UnitWithActiveDamageSkill, otherUnit: DefaultUnit): void => {
    if (otherUnit.unitName === attacking.unitName && otherUnit.type === attacking.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.health <= 0) {
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
            otherUnit.health = 0;
            console.log(`${otherUnit.unitName} is killed by ${attacking.unitName} ${attacking.type}`)
          }
        }
      }
    }
  }
};

export class SimpleHealSkill implements ActiveHealSkillBehavior {
  useSkill = (healer: UnitWithActiveHealSkill, target: DefaultUnit): void => {
    if (target.health <= 0) {
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
