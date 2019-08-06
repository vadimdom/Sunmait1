import { DefaultUnit } from './common';
import { AttackBehavior, SimpleAttack } from './attackBehavior/attackBehavior';
import { ICanAttack } from './interfaces';

export class Swordsman
  extends DefaultUnit
  implements
    ICanAttack
{
  attackBehavior: AttackBehavior;

  constructor(
  ) {
    super();

    this.unitName = 'Swordsman';
    this.damage = { min: 20, max: 30 };
    this.health = 500;
    this.mana = 0;
    this.armor = 2;
    this.attackBehavior = new SimpleAttack();
  }

  attack(otherUnit: DefaultUnit) {
    this.attackBehavior.attack && this.attackBehavior.attack(this, otherUnit);
  }
}
