import {useCallback} from 'react';
import {useAtom, atom} from 'jotai';

import {counterState, skipState} from './counter-atoms';

const useCounter = () => {
  const [counter, setCounter] = useAtom(counterState);
  const [skip] = useAtom(atom(get => get(skipState)));

  const increment = useCallback(() => {
    setCounter(prevCounter => prevCounter + skip);
  }, [skip]);

  const decrement = useCallback(() => {
    setCounter(prevCounter => prevCounter - skip);
  }, [skip]);

  return {
    counter,
    decrement,
    increment,
  };
};

const useSkip = () => {
  const [skip, setSkip] = useAtom(skipState);

  const increment = useCallback(() => {
    setSkip(prevSkip => prevSkip + 1);
  }, [setSkip]);

  const decrement = useCallback(() => {
    setSkip(prevSkip => prevSkip - 1);
  }, [setSkip]);

  return {
    skip,
    decrement,
    increment,
  };
};

export {useCounter, useSkip};
