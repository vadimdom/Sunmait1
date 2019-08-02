import { DefaultUnit } from '../common';
import { ActiveDamageSkill, ActiveHealSkill, PassiveSkill } from './skills';

export interface Damage {
  min: number;
  max: number;
};

export interface IWithUnitName {
  unitName: string;
};

export interface IWithUnitType {
  type: string;
};

export interface IWithDamage {
  damage: Damage;
};

export interface IWithHealth {
  health: number;
};

export interface IWithArmor {
  armor: number;
};

export interface IWithMana {
  mana: number;
};

export interface IWithActiveDamageSkill {
  skill: ActiveDamageSkill;
};

export interface IWithActiveHealSkill {
  skill2: ActiveHealSkill;
};

export interface ICanAttack {
  attack: (target: DefaultUnit) => void;
};

export interface IWithPassiveSkill {
  skill: PassiveSkill;
}