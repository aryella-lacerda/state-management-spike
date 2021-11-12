import {useCallback, useContext} from 'react';
import {useSelector} from '@xstate/react';
import {CounterContext} from './counter-provider';

const useCounter = () => {
  const services = useContext(CounterContext);
  const counter = useSelector(
    services.counterService,
    state => state.context.counter,
  );

  const {send} = services.counterService;

  const decrement = useCallback(() => send('DECREMENT_COUNTER'), [send]);
  const increment = useCallback(() => send('INCREMENT_COUNTER'), [send]);

  return {
    counter,
    decrement,
    increment,
  };
};

const useSkip = () => {
  const services = useContext(CounterContext);
  const skip = useSelector(
    services.counterService,
    state => state.context.skip,
  );

  const {send} = services.counterService;

  const decrement = useCallback(() => send('DECREMENT_SKIP'), [send]);
  const increment = useCallback(() => send('INCREMENT_SKIP'), [send]);

  return {
    skip,
    decrement,
    increment,
  };
};

export {useCounter, useSkip};
