import create from 'zustand';
import shallow from 'zustand/shallow';

interface CounterState {
  counter: number;
  skip: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  incrementSkip: () => void;
  decrementSkip: () => void;
}

export const useStore = create<CounterState>(set => ({
  counter: 0,
  skip: 1,
  incrementCounter: () => set(state => ({counter: state.counter + state.skip})),
  decrementCounter: () => set(state => ({counter: state.counter - state.skip})),
  incrementSkip: () => set(state => ({skip: state.skip + 1})),
  decrementSkip: () => set(state => ({skip: state.skip - 1})),
}));

export const useCounter = () => {
  return useStore(
    state => ({
      counter: state.counter,
      increment: state.incrementCounter,
      decrement: state.decrementCounter,
    }),
    shallow,
  );
};

export const useSkip = () => {
  return useStore(
    state => ({
      skip: state.skip,
      increment: state.incrementSkip,
      decrement: state.decrementSkip,
    }),
    shallow,
  );
};

// --- Mais fácil fazer do jeito acima, passando o "shallow"

// export const useCounter = () => {
//   const counter = useStore(state => state.counter);
//   const increment = useStore(state => state.incrementCounter);
//   const decrement = useStore(state => state.decrementCounter);

//   return {
//     counter,
//     increment,
//     decrement,
//   };
// };

// export const useSkip = () => {
//   const skip = useStore(state => state.skip);
//   const increment = useStore(state => state.incrementSkip);
//   const decrement = useStore(state => state.decrementSkip);

//   return {
//     skip,
//     increment,
//     decrement,
//   };
// };
