import { arrayMatrixDot } from './helpers/array.helper';
import { sigmoid } from './helpers/math.helper';

export interface NeuralNetwork {
  forward: (input: number[]) => number[];
}

export const createNeuralNetwork = ({
  inputSize,
  hiddenSize,
  outputSize
}: {
  inputSize: number;
  hiddenSize: number;
  outputSize: number;
}): NeuralNetwork => {
  /**
   * Forward Propagation (using sigmoid to activate)
   *
   * Calculate the output of network, for a given input
   * - Product from input to hidden layer
   * - Product from hidden to output layer
   */
  const forward = (input: number[]): number[] => {
    const hiddenLayer = arrayMatrixDot(input, weightsInputToHidden).map(
      sigmoid
    );

    const outputLayer = arrayMatrixDot(hiddenLayer, weightsHiddenToOutput).map(
      sigmoid
    );

    return outputLayer;
  };

  /**
   * Back Propagation
   * - Loss function: Mean Square Error (MSE)
   * - Propagate the error backwards in the network
   * - Updating weights
   */
  const backProp = ({
    input,
    target,
    output,
    learningRate = 1
  }: {
    input: number[];
    target: number[];
    output: number[];
    learningRate?: number;
  }) => {};

  /**
   * Mean Squared Error Loss Function
   *
   * Calculate how much  the Network got it wrong.
   * This is used to penalize the model.
   */
  const mse = (output: number[], target: number[]): number => {
    if (output.length !== target.length) {
      throw new Error('Arrays output and target must be of the same length.');
    }

    const sumOfSquares = output.reduce((acc, currentValue, index) => {
      const error = currentValue - target[index];
      return acc + error * error;
    }, 0);

    return sumOfSquares / output.length;
  };

  // weights to connect the input layer to the hidden layer
  const weightsInputToHidden = Array.from({ length: inputSize }).map(() =>
    Array.from({ length: hiddenSize }).map(Math.random)
  );

  // weights to connect the hidden layer to the output layer
  const weightsHiddenToOutput = Array.from({ length: hiddenSize }).map(() =>
    Array.from({ length: outputSize }).map(Math.random)
  );

  return { forward };
};
