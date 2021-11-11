import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
  skip: number;
}

const initialState: CounterState = {
  counter: 0,
  skip: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: state => {
      state.counter += state.skip;
    },
    decrementCounter: state => {
      state.counter -= state.skip;
    },
    incrementSkip: state => {
      state.skip += 1;
    },
    decrementSkip: state => {
      state.skip -= 1;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  incrementSkip,
  decrementSkip,
} = counterSlice.actions;
