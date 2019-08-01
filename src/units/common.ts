interface Damage {
  min: number;
  max: number;
};

export interface Skill {
  type: string | 'none';
  name?: string;
  description?: string;
};

export class DefaultUnit {
  unitName: string;
  type: string | null;
  damage: Damage;
  health: number;
  armor: number;
  mana: number;
  skill: Skill;
  skill2?: Skill;
  isDead: boolean;

  constructor() {
    this.unitName = 'Default Unit';
    this.type = '';
    this.damage = {
      min: 5,
      max: 10
    };
    this.health = 10;
    this.armor = 0;
    this.mana = 0;
    this.skill = { type : 'none'};
    this.isDead = false;
  };

  sayYourName() : string {
    return "Hello, I am " + this.unitName;
  };

  sayYourType() : string {
    return "My type is " + this.type;
  };

  sayYourDamage() : string {
    if (this.damage && this.damage.min && this.damage.max) {
      return `My min damage is ${this.damage.min} and max is ${this.damage.max}!`;
    }
    return `I have no idea what is my damage!`;
  };

  sayYourHealth() : string {
    return `My health is ${this.health}`;
  };

  sayYourArmor() : string {
    return `My armor is ${this.armor}`;
  };

  sayYourMana() : string {
    return `My mana is ${this.mana}`;
  };

  introduceYourself() : string {
    return `
      Name: ${this.unitName}
      ${ this.type ? `Type: ${this.type}` : 'Type: no'}
      ${ this.damage && `Damage: ${this.damage.min}-${this.damage.max}`}
      HP: ${this.health}
      MP: ${this.mana}
      Armor: ${this.armor}
      ${ this.skill.type === 'none' ? `Skill: No skill` : `Skill: ${this.skill.type}, ${this.skill.name}, ${this.skill.description}`}
      ${this.isDead ? 'Is Dead!!!((((' : ''}
      `;
  };
};
