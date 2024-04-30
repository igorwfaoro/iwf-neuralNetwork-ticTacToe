import { createGame } from './game';
import { GameState } from './types/game-state';
import { PlayerNames } from './types/player';

while (true) {
  const game = createGame();

  console.log("Let's play Tic Tack Toe!");

  game.printBoard();

  let gameState: GameState = { isOver: false };
  while (!gameState.isOver) {
    game.makeMovement();
    game.printBoard();

    gameState = game.state();
  }

  console.log('Game over!');
  const winner = gameState.winner;
  if (winner) console.log(`The winner is ${PlayerNames[winner]}`);

  console.log('-----------------\n');
}
