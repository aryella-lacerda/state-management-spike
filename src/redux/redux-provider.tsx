import React from 'react';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {counterSlice} from './counter-slice';

const store = configureStore({
  reducer: counterSlice.reducer,
});

type Props = {
  children: React.ReactElement;
};

export const ReduxProvider = ({children}: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
