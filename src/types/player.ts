export enum Player {
  HUMAN = -1,
  AI = 1,
  EMPTY = 0
}

export const PlayerNames: { [key in Player]: string } = {
  [Player.HUMAN]: 'Human',
  [Player.AI]: 'AI',
  [Player.EMPTY]: 'Empty'
};
