import promptInstance from 'prompt-sync';
import { GameState } from './types/game-state';
import { Player } from './types/player';

const prompt = promptInstance({ sigint: true });

export const createGame = () => {
  const board: (Player | 0)[] = Array(9).fill(Player.EMPTY);

  let currentPlayer = Player.HUMAN;

  const makeMovement = () => {
    if (currentPlayer === Player.HUMAN) {
      humanPlays();
    } else if (currentPlayer === Player.AI) {
      aiPlays();
    } else console.log('Invalid movement');
  };

  const humanPlays = () => {
    console.log('Your turn');

    let position: number;
    do {
      position = Number(prompt('Choose a position (0-8): '));
    } while (
      board[position] !== Player.EMPTY ||
      position >= board.length ||
      position < 0
    );

    board[position] = Player.HUMAN;
    currentPlayer = Player.AI;
  };

  const aiPlays = () => {
    console.log('AI turn');

    let position: number;
    do {
      position = Math.floor(Math.random() * board.length);
    } while (board[position] !== Player.EMPTY);

    board[position] = Player.AI;
    currentPlayer = Player.HUMAN;
  };

  const state = (): GameState => {
    const isAllPositionsNotEmpty = board.every((p) => p !== Player.EMPTY);

    const possibleWinSequences = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const winnerSequence = possibleWinSequences.find((sequence) => {
      const boardSequence = sequence.map((s) => board[s]);

      const boardSequenceHasSamePlayer = boardSequence.every(
        (value) => value !== Player.EMPTY && value === boardSequence[0]
      );

      if (boardSequenceHasSamePlayer) return true;
    });

    const isOver = isAllPositionsNotEmpty || !!winnerSequence;
    const winner = winnerSequence ? board[winnerSequence[0]] : undefined;

    return {
      isOver,
      winner
    };
  };

  const printBoard = () => {
    let content = '';
    board.forEach((value, idx) => {
      const possiblePrints: { [key in Player]: string } = {
        [Player.HUMAN]: 'X',
        [Player.AI]: '0',
        [Player.EMPTY]: '#'
      };

      const charToPrint = possiblePrints[value];

      const breakLine = idx === 2 || idx === 5 || idx === 8;

      content += `${charToPrint}${breakLine ? '\n' : ' '}`;
    });

    console.log(content);
  };

  return {
    makeMovement,
    printBoard,
    state
  };
};
