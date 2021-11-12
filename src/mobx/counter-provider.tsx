import React from 'react';
import {CounterContext} from './counter-context';
import {Counter} from './counter-store';

type Props = {
  children: React.ReactElement;
};

export const CounterProvider = ({children}: Props) => {
  return (
    <CounterContext.Provider value={new Counter()}>
      {children}
    </CounterContext.Provider>
  );
};
