import { Player } from './player';

export interface GameState {
  isOver: boolean;
  winner?: Player;
}
