import {useAppSelector, useAppDispatch} from './redux-hooks';
import {
  incrementCounter,
  decrementCounter,
  incrementSkip,
  decrementSkip,
} from './counter-slice';

const useCounter = () => {
  const counter = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  const decrement = () => dispatch(decrementCounter());
  const increment = () => dispatch(incrementCounter());

  return {
    counter,
    decrement,
    increment,
  };
};

const useSkip = () => {
  const skip = useAppSelector(state => state.skip);
  const dispatch = useAppDispatch();

  const decrement = () => dispatch(decrementSkip());
  const increment = () => dispatch(incrementSkip());

  return {
    skip,
    decrement,
    increment,
  };
};

export {useCounter, useSkip};
