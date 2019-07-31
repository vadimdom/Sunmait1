import { Swordsman, Archer, ArcherCaptain, Skeleton, Paladin } from './units';

export const fightEmulation = () => {

  console.log('Before fight:');
  let swordsman = new Swordsman();
  let archer = new Archer();
  let archerCaptain = new ArcherCaptain();
  let skeleton = new Skeleton();
  let paladin = new Paladin();
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