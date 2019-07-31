import { Skeleton } from '../units';
import { skeletonTemplate } from './templates';

describe('Skeleton has right parameters', () => {
  it('Skeleton has right health', () => {
    const skeleton = new Skeleton();
  
    expect(skeleton.health).toBe(skeletonTemplate.health);
  });

  it('Skeleton has right damage', () => {
    const skeleton = new Skeleton();

    expect(skeleton.damage).toEqual(skeletonTemplate.damage);
  });

  it('Skeleton has right mana', () => {
    const skeleton = new Skeleton();

    expect(skeleton.mana).toBe(skeletonTemplate.mana);
  });

  it('Skeleton has right armor', () => {
    const skeleton = new Skeleton();

    expect(skeleton.armor).toBe(skeletonTemplate.armor);
  });

  it('Skeleton has right skill', () => {
    const skeleton = new Skeleton();

    expect(skeleton.skill).toEqual(skeletonTemplate.skill);
  });
})