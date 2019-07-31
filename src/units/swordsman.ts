import { DefaultUnit } from './common';

export class Swordsman extends DefaultUnit {
  constructor(
  ) {
    super();

    this.unitName = 'Swordsman';
    this.damage = { min: 20, max: 30 };
    this.health = 500;
    this.mana = 0;
    this.armor = 2;
  }
}