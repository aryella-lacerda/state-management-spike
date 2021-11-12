import {useContextSelector} from 'use-context-selector';

import {CounterContext} from './counter-context';

const useCounter = () => {
  const counter = useContextSelector(CounterContext, c => c.counter);
  const decrement = useContextSelector(CounterContext, c => c.decrementCounter);
  const increment = useContextSelector(CounterContext, c => c.incrementCounter);

  return {
    counter,
    decrement,
    increment,
  };
};

const useSkip = () => {
  const skip = useContextSelector(CounterContext, c => c.skip);
  const decrement = useContextSelector(CounterContext, c => c.decrementSkip);
  const increment = useContextSelector(CounterContext, c => c.incrementSkip);

  return {
    skip,
    decrement,
    increment,
  };
};

export {useCounter, useSkip};
