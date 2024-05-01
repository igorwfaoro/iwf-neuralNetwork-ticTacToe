import { createGame } from './game';
import { createNeuralNetwork } from './neural-network';

const run = () => {
  const neuralNetwork = createNeuralNetwork({
    inputSize: 9,
    hiddenSize: 10,
    outputSize: 9
  });

  while (true) {
    createGame().run();
  }
};

run();
