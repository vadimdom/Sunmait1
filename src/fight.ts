import { UnitsFabric } from './units/unitsFabric';

export const fightEmulation = () => {

  const unitFabric = new UnitsFabric();

  console.log('Before fight:');
  let swordsman = unitFabric.createSwordsman();
  let archer = unitFabric.createArcher();
  let archerCaptain = unitFabric.createArcherCaptain();
  let skeleton = unitFabric.createSkeleton();
  let paladin = unitFabric.createPaladin();
  console.log(swordsman.introduceYourself());
  console.log(archer.introduceYourself());
  console.log(archerCaptain.introduceYourself());
  console.log(skeleton.introduceYourself());
  console.log(paladin.introduceYourself());

  console.log('Fight');
  swordsman.attack(paladin);
  paladin.attack(paladin);
  skeleton.attack(paladin);
  skeleton.attack(paladin);
  skeleton.attack(paladin);
  skeleton.attack(paladin);
  skeleton.attack(paladin);
  archer.useSkill(paladin);
  archer.useSkill(paladin);
  archer.useSkill(paladin);
  archerCaptain.useSkill(paladin);
  paladin.useHealSkill(paladin);
  archerCaptain.useSkill(paladin);
  archerCaptain.useSkill(paladin);
  archerCaptain.useSkill(paladin);
  archerCaptain.useSkill(paladin);
  archerCaptain.useSkill(paladin);

  console.log('After fight:');
  console.log(swordsman.introduceYourself());
  console.log(archer.introduceYourself());
  console.log(archerCaptain.introduceYourself());
  console.log(skeleton.introduceYourself());
  console.log(paladin.introduceYourself());
};