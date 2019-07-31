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
  isDead: boolean;

  constructor(
    userName?: string,
    userType?: string | null,
    userDamage?: Damage | null,
    userHealth?: number,
    userArmor?: number,
    userMana? : number,
    userSkill?: Skill
  ) {
    if (userName) {
      this.unitName = userName;
    } else {
      this.unitName = 'Default Unit';
    }
    if (userType) {
      this.type = userType;
    } else {
      this.type = '';
    }
    if (userDamage && userDamage.min && userDamage.max) {
      this.damage = userDamage;
    } else {
      this.damage = {
        min: 5,
        max: 10
      };
    }
    if (userHealth) {
      this.health = userHealth;
    } else {
      this.health = 10;
    }
    if (userArmor) {
      this.armor = userArmor;
    } else {
      this.armor = 0;
    }
    if (userMana) {
      this.mana = userMana;
    } else {
      this.mana = 0;
    }
    if (userSkill) {
      this.skill = userSkill;
    } else {
      this.skill = { type : 'none'};
    }
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

  attack(otherUnit: DefaultUnit): void {
    if (otherUnit.unitName === this.unitName && otherUnit.type === this.type) {
      console.log(`You can not make harakiri`);
    } else {
      if (otherUnit.isDead) {
        console.log(`You can not attack dead units`);
      } else {
        console.log(`${this.unitName} ${this.type} attacked ${otherUnit.unitName}`);
        // console.log(`before = ${otherUnit.health}`);
        const attackDamage = Math.floor(Math.random() * (+this.damage.max - +this.damage.min)) + +this.damage.min;
        console.log(`Damage = ${attackDamage}`);
        otherUnit.health = otherUnit.health + otherUnit.armor - attackDamage;
        if (otherUnit.health <= 0) {
          otherUnit.isDead = true;
          otherUnit.health = 0;
          console.log(`${otherUnit.unitName} is killed by ${this.unitName} ${this.type}`)
        }
        // console.log(`after = ${otherUnit.health}`);
      }
    }
  };
};
