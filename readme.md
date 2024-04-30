
# Tic Tac Toe Neural Network Game

## Overview

This project is a simple implementation of the classic game Tic Tac Toe, where a neural network AI competes against a human player. The game is built in TypeScript and utilizes a basic neural network to make decisions for the AI player. This approach provides a challenging opponent for the human player while demonstrating the principles of machine learning in game design.

## Features

- **Two Player Modes**: Play as a human against an AI that uses a neural network to determine its moves.
- **Neural Network AI**: The AI uses a simple neural network to evaluate and choose its moves, aiming to optimize its chances of winning based on the current state of the board.
- **Dynamic Game Board**: A console-based game board that updates after each move, showing the current state of the game.
- **Game State Evaluations**: The game continuously checks for a winner or a tie, ensuring the game ends at the appropriate time.

## How to Run

To run this game, you will need Node.js installed on your computer. Follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the directory where you cloned the repository.
3. Run `npm install` to install the dependencies.
4. Execute `node main.ts` to start the game.

## Neural Network Strategy

The AI uses a very basic neural network that evaluates the game board's state to make predictions about the best move. This neural network is trained on a dataset generated from numerous game scenarios to learn typical human moves and counter them effectively.

<br>
<br>

> This project is inspired by and based on concepts explored by [Lucas Montano](https://github.com/lucasmontano).