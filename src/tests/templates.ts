export const archerTemplate = {
  damage: {
    min: 15,
    max: 20
  },
  health: 300,
  mana: 100,
  armor: 0,
  skill: {
    type: 'Active',
    name: 'Shot',
    damage: 100,
    cost: 50,
    description: 'Deal 100 damage'
  }
};

export const archerCaptainTemplate = {
  damage: {
    min: 30,
    max: 35
  },
  health: 600,
  mana: 200,
  armor: 1,
  skill: {
    type: 'Active',
    name: 'Shot',
    damage: 150,
    cost: 50,
    description: 'Deal 150 damage'
  }
};

export const paladinTemplate = {
  damage: {
    min: 40,
    max: 50
  },
  health: 700,
  mana: 300,
  armor: 5,
  skill: {
    type: 'Passive',
    name: 'Critical strike',
    multiplier: 3,
    chance: 30,
    description: '30% to deal 3x damage'
  }
};

export const skeletonTemplate = {
  damage: {
    min: 5,
    max: 8
  },
  health: 180,
  mana: 0,
  armor: 1,
  skill: {
    type: 'Passive',
    name: 'Critical strike',
    multiplier: 2,
    chance: 20,
    description: '20% to deal 2x damage'
  }
};

export const swordsmanTemplate = {
  damage: {
    min: 20,
    max: 30
  },
  health: 500,
  mana: 0,
  armor: 2,
  skill: {
    type: 'none'
  },
  healthAfterOneArcherSkill: 402,
  healthAfterTwoArcherSkills: 304
};