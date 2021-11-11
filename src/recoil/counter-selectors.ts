import {useCallback} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';

import {counterState, skipState} from './counter-atoms';

const useCounter = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const skip = useRecoilValue(skipState);

  const increment = useCallback(() => {
    setCounter(prevCounter => prevCounter + skip);
  }, [setCounter, skip]);

  const decrement = useCallback(() => {
    setCounter(prevCounter => prevCounter - skip);
  }, [setCounter, skip]);

  return {
    counter,
    decrement,
    increment,
  };
};

const useSkip = () => {
  const [skip, setSkip] = useRecoilState(skipState);

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
