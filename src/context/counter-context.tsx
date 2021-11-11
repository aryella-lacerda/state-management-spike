import {createContext} from 'use-context-selector';

export interface CounterContext {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;

  skip: number;
  incrementSkip: () => void;
  decrementSkip: () => void;
}

export const initialState = {
  counter: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},

  skip: 0,
  incrementSkip: () => {},
  decrementSkip: () => {},
};

export const CounterContext = createContext<CounterContext>(initialState);
