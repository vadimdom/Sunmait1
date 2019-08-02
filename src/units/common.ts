import {
  Damage,
  IWithUnitName,
  IWithUnitType,
  IWithDamage,
  IWithHealth,
  IWithArmor,
  IWithMana
} from './interfaces';

export class DefaultUnit
  implements
    IWithUnitName,
    IWithUnitType,
    IWithDamage,
    IWithHealth,
    IWithArmor,
    IWithMana
{
  unitName: string;
  type: string;
  damage: Damage;
  health: number;
  armor: number;
  mana: number;

  constructor() {
    this.unitName = 'Default Unit';
    this.type = '';
    this.damage = {
      min: 0,
      max: 1
    };
    this.health = 10;
    this.armor = 0;
    this.mana = 0;
  };

  introduceYourself() : string {
    return `
      Name: ${this.unitName}
      ${ this.type ? `Type: ${this.type}` : 'Type: no'}
      ${ this.damage && `Damage: ${this.damage.min}-${this.damage.max}`}
      HP: ${this.health}
      MP: ${this.mana}
      Armor: ${this.armor}
      `;
  };
};
