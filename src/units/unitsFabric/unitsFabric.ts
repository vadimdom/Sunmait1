import { Archer, ArcherCaptain, Skeleton, Swordsman, Paladin } from '..';

export interface IUnitsFabric {
  createSwordsman: () => Swordsman;
  createArcher: () => Archer;
  createArcherCaptain: () => ArcherCaptain;
  createSkeleton: () => Skeleton;
  createPaladin: () => Paladin;
};

export class UnitsFabric implements IUnitsFabric {
  createSwordsman = () => {
    return new Swordsman();
  }

  createArcher = () => {
    return new Archer();
  }

  createArcherCaptain = () => {
    return new ArcherCaptain();
  }
  
  createSkeleton = () => {
    return new Skeleton();
  }

  createPaladin = () => {
    return new Paladin();
  }
}
