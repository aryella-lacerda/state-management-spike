import React, {createContext} from 'react';
import {useInterpret} from '@xstate/react';
import {counterMachine} from './counter-machines';
import {InterpreterFrom} from 'xstate';

export const CounterContext = createContext(
  {} as {
    counterService: InterpreterFrom<typeof counterMachine>;
  },
);

type Props = {
  children: React.ReactElement;
};

export const CounterProvider = ({children}: Props) => {
  const counterService = useInterpret(counterMachine);

  return (
    <CounterContext.Provider value={{counterService}}>
      {children}
    </CounterContext.Provider>
  );
};
