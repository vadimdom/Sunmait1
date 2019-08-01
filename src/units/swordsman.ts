import { DefaultUnit } from './common';
import { SimpleAttack } from './attackBehavior/attackBehavior';

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

  attack(otherUnit: DefaultUnit) {
    const performAttack = new SimpleAttack();
    performAttack.attack(this, otherUnit);
  }
}
