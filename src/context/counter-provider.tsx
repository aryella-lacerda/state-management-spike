import React, {useState, useCallback} from 'react';

import {CounterContext} from './counter-context';

type Props = {
  children: React.ReactElement;
};

const CounterProvider = ({children}: Props) => {
  const [counter, setCounter] = useState(0);
  const [skip, setSkip] = useState(1);

  const incrementCounter = useCallback(() => {
    setCounter(prevCounter => prevCounter + skip);
  }, [skip]);

  const decrementCounter = useCallback(() => {
    setCounter(prevCounter => prevCounter - skip);
  }, [skip]);

  const incrementSkip = useCallback(() => {
    setSkip(prevSkip => prevSkip + 1);
  }, []);

  const decrementSkip = useCallback(() => {
    setSkip(prevSkip => prevSkip - 1);
  }, []);

  return (
    <CounterContext.Provider
      value={{
        counter,
        incrementCounter,
        decrementCounter,
        skip,
        incrementSkip,
        decrementSkip,
      }}>
      {children}
    </CounterContext.Provider>
  );
};

export {CounterProvider};
