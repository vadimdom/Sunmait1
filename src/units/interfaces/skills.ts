export interface Skill {
  type: string;
  name?: string;
  description?: string;
};

export interface PassiveSkill extends Skill {
  multiplier: number;
  chance: number;
}

export interface ActiveSkill extends Skill {
  cost: number;
};

export interface ActiveDamageSkill extends ActiveSkill {
  damage: number;
};

export interface ActiveHealSkill extends ActiveSkill {
  health: number;
};