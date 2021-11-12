import {createMachine, assign} from 'xstate';

// The events that the machine handles
type CounterEvent =
  | {type: 'INCREMENT_COUNTER'}
  | {type: 'DECREMENT_COUNTER'}
  | {type: 'INCREMENT_SKIP'}
  | {type: 'DECREMENT_SKIP'};

// The context (extended state) of the machine
interface CounterContext {
  counter: number;
  skip: number;
}

export const counterMachine = createMachine<CounterContext, CounterEvent>({
  initial: 'active',
  context: {
    counter: 0,
    skip: 1,
  },
  states: {
    active: {
      on: {
        INCREMENT_COUNTER: {
          actions: assign({
            counter: context => context.counter + 1,
          }),
        },
        DECREMENT_COUNTER: {
          actions: assign({
            counter: context => context.counter - 1,
          }),
        },
        INCREMENT_SKIP: {
          actions: assign({
            skip: context => context.counter + context.skip,
          }),
        },
        DECREMENT_SKIP: {
          actions: assign({
            skip: context => context.counter - context.skip,
          }),
        },
      },
    },
  },
});
